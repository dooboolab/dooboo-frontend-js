import React, { useReducer } from 'react';
import { AppContext } from '../contexts';
import type { User, Locale } from '../types';
import STRINGS from '../../STRINGS';

const AppConsumer = AppContext.Consumer;

type Props = { };
export type State = {
  user: User,
  locale: Locale,
};

const initialState: State = {
  user: {
    displayName: '',
    age: 0,
    job: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset-user':
      return { ...state, user: initialState.user };
    case 'set-user':
      console.log('setUser', state, action);
      return { ...state, user: action.payload };
  }
};

function AppProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppConsumer, AppProvider, AppContext };
