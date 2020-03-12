import React, { Dispatch, createContext, useContext, useEffect } from 'react';
import { getUniqueId } from 'react-native-device-info';

export interface StoreProviderProps {
  children?: React.ReactNode;
  value: StoreProviderState;
}

export interface StoreProviderState {
  deviceUniqueId: string;
}

export function getInitialStore(): StoreProviderState {
  return {
    deviceUniqueId: getUniqueId(),
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

export const storeActions = {};
