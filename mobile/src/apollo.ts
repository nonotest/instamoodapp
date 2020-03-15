import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

import Config from 'react-native-config';

const makeApolloClient = session => {
  const httpLinkUri = Config.HTTP_HASURA_URL;
  const httpLinkHeaders = {
    ...session,
  };
  if (Config.APP_ENV === 'dev') {
    httpLinkHeaders['x-hasura-admin-secret'] = `myadminsecretkey`;
  }
  const httpLinkConfig = {
    uri: httpLinkUri,
    headers: httpLinkHeaders,
  };

  const httpLink = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink(httpLinkConfig),
  ]);

  // Create a WebSocket link:
  const wsLink = new WebSocketLink({
    uri: Config.WS_HASURA_URL, // use wss for a secure endpoint
    options: {
      reconnect: true,
      connectionParams: {
        headers: httpLinkHeaders,
      },
    },
  });

  // console.log({
  //   uri: Config.WS_HASURA_URL, // use wss for a secure endpoint
  //   reconnect: true,
  //   connectionParams: {
  //     headers: httpLinkHeaders,
  //   },
  // });

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
  );

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};

export default makeApolloClient;
