import React, { useReducer } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import {
  DispatchProvider,
  StoreProvider,
  StoreProviderState,
  getInitialStore,
  storeActions,
} from './context/StoreContext';
import { ThemeProvider } from './themes';
import HomeScreen from './screens/HomeScreen';

const App: () => React$Node = () => {
  const [state, dispatch] = useReducer(storeReducer, getInitialStore());

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
      const userMoods = Object.keys(action.payload.moods).map(
        key => action.payload.moods[key],
      );

      return {
        ...state,
        userMoods,
      };
    default:
      return state;
  }
}

export default App;
