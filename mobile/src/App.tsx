import React, { useEffect, useReducer, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { ThemeProvider } from './themes';
import HomeScreen from './screens/HomeScreen';
import {
  StoreProvider,
  StoreProviderState,
  getInitialStore,
} from './context/StoreContext';

import makeApolloClient from './apollo';
import { ApolloProvider } from '@apollo/react-hooks';

const App: () => React$Node = () => {
  const [client, setClient] = useState(null);
  const [state, dispatch] = useReducer(storeReducer, getInitialStore());

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
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider>
          <StoreProvider value={state}>
            <ApolloProvider client={client}>
              <HomeScreen />
            </ApolloProvider>
          </StoreProvider>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

function storeReducer(state: StoreProviderState, action) {
  return state;
}

export default App;
