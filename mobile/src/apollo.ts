import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import Config from 'react-native-config';

const makeApolloClient = session => {
  const httpLinkUri = `${Config.HASURA_URL}`;
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

  return new ApolloClient({
    link: ApolloLink.from([
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
    ]),
    cache: new InMemoryCache(),
  });
};

export default makeApolloClient;
