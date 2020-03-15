import React, { useEffect, useReducer, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks';

import { ThemeProvider } from './themes';
import {
  StoreProvider,
  StoreProviderState,
  getInitialStore,
} from './context/StoreContext';
import makeApolloClient from './apollo';
import RootNavigator from './navigation';

const App: () => React$Node = () => {
  const [client, setClient] = useState(null);
  const [state, _] = useReducer(storeReducer, getInitialStore());

  const fetchSession = async () => {
    // fetch session
    // const session = await AsyncStorage.getItem('@todo-graphql:session');
    // const sessionObj = JSON.parse(session);
    // const { token, id } = sessionObj;
    // for now we fetch a new session

    const client = makeApolloClient({});
    setClient(client);
  };

  useEffect(() => {
    fetchSession();
  }, []);

  if (!client) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <ThemeProvider>
        <StoreProvider value={state}>
          <ApolloProvider client={client}>
            <RootNavigator />
          </ApolloProvider>
        </StoreProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

function storeReducer(state: StoreProviderState, action) {
  return state;
}

export default App;
