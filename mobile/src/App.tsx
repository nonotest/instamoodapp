import React, { useReducer, useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import {
  DispatchProvider,
  StoreProvider,
  StoreProviderState,
  getInitialStore,
  storeActions,
} from './context/StoreContext';
import { ThemeProvider } from './themes';
import storage from './services/storage';
import HomeScreen from './screens/HomeScreen';

const App: () => React$Node = () => {
  const [state, dispatch] = useReducer(storeReducer, getInitialStore());
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    // looks for user set moods in the async storage store.
    // if there are none, prompt them to enter a few via our modal screen.
    async function loadStore() {
      // await storage.set('favouriteMoods', JSON.stringify([]));
      const moods = await storage.get('favouriteMoods');
      if (moods) {
        dispatch({
          type: storeActions.USER_MOODS_RECEIVED,
          payload: { moods: JSON.parse(moods) },
        });
      }

      setAppLoaded(true);
    }
    loadStore();
  }, []);

  if (!appLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider>
          <DispatchProvider value={dispatch}>
            <StoreProvider value={state}>
              <HomeScreen />
            </StoreProvider>
          </DispatchProvider>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
};

function storeReducer(state: StoreProviderState, action) {
  switch (action.type) {
    case storeActions.MEDIA_RECEIVED:
      return {
        ...state,
        medias: [...state.medias, action.payload.media],
      };
    case storeActions.MEDIA_SOURCE_RECEIVED:
      return {
        ...state,
        mediaSources: [...state.mediaSources, action.payload.mediaSources],
      };
    case storeActions.MOOD_RECEIVED:
      return {
        ...state,
        moods: action.payload.moods,
      };
    case storeActions.USER_MOODS_RECEIVED:
      return {
        ...state,
        userMoods: action.payload.moods,
      };
    case storeActions.TRENDS_RECEIVED:
      return {
        ...state,
        trends: action.payload.trends,
      };
    default:
      return state;
  }
}

export default App;
