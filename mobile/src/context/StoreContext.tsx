import React, { Dispatch, createContext, useContext, useEffect } from 'react';
import { Media, MediaSource, Mood, Trend } from '../core';
import {
  onMediaSourcesChange,
  onMoodsChange,
  getTrends,
} from '../services/firebase';

export interface StoreProviderProps {
  children?: React.ReactNode;
  value: StoreProviderState;
}

export interface StoreProviderState {
  medias: Array<Media>;
  mediaSources: Array<MediaSource>;
  moods: Array<Mood>;
  userMoods: string[];
  trends: Array<Trend>;
}

export function getInitialStore(): StoreProviderState {
  return {
    medias: [],
    mediaSources: [],
    moods: [],
    userMoods: [],
    trends: [],
  };
}

export const StoreContext = createContext<StoreProviderState>(
  getInitialStore(),
);
StoreContext.displayName = 'StoreContext';

export function StoreProvider(props: StoreProviderProps) {
  return (
    <StoreContext.Provider value={props.value}>
      {props.children}
    </StoreContext.Provider>
  );
}

export const StoreConsumer = StoreContext.Consumer;
(StoreConsumer as any).displayName = 'StoreConsumer';

export function useStore() {
  return useContext(StoreContext);
}

interface Actions {
  type: string;
  payload: any;
}

export const DispatchContext = createContext<Dispatch<Actions>>();

export function DispatchProvider(props) {
  return (
    <DispatchContext.Provider value={props.value}>
      {props.children}
    </DispatchContext.Provider>
  );
}

export function useDispatch() {
  return useContext(DispatchContext);
}

export const storeActions = {
  MEDIA_RECEIVED: 'MEDIA_RECEIVED',
  MEDIA_SOURCE_RECEIVED: 'MEDIA_SOURCE_RECEIVED',
  MOOD_RECEIVED: 'MOOD_RECEIVED',
  USER_MOODS_RECEIVED: 'USER_MOODS_RECEIVED',
  TRENDS_RECEIVED: 'TRENDS_RECEIVED',
};

export function useFetchTrends() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const trends = await getTrends();
    dispatch({
      type: storeActions.TRENDS_RECEIVED,
      payload: {
        trends: trends.data.slice(0, 10),
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
}

export function useListenToMoodsChanges() {
  // Load the initial media.
  const dispatch = useDispatch();
  const dispatchChanges = data => {
    dispatch({
      type: storeActions.MOOD_RECEIVED,
      payload: {
        moods: data,
      },
    });
  };
  useEffect(() => {
    const unsubscribe = onMoodsChange(dispatchChanges, () => {});

    return () => {
      unsubscribe();
    };
  }, []);
}

export function useListenToMediaSourcesChanges() {
  // Load the initial media.
  const dispatch = useDispatch();
  const dispatchChanges = data => {
    dispatch({
      type: storeActions.MEDIA_SOURCE_RECEIVED,
      payload: {
        mediaSources: data,
      },
    });
  };
  useEffect(() => {
    const unsubscribe = onMediaSourcesChange(dispatchChanges, () => {});

    return () => {
      unsubscribe();
    };
  }, []);
}
