import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { ThemeProvider } from './themes';
import HomeScreen from './screens/HomeScreen';

import makeApolloClient from './apollo';
import { ApolloProvider } from '@apollo/react-hooks';

const App: () => React$Node = () => {
  const [client, setClient] = useState(null);
  const fetchSession = async () => {
    // fetch session
    // const session = await AsyncStorage.getItem('@todo-graphql:session');
    // const sessionObj = JSON.parse(session);
    // const { token, id } = sessionObj;
    const client = makeApolloClient('');
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
          <ApolloProvider client={client}>
            <HomeScreen />
          </ApolloProvider>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
