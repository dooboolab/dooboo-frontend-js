import React, { createContext } from 'react';
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

class AppProvider extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  actions = {
    setUser: (user: User) => {
      this.setState({
        user,
      });
    },
    resetUser: () => {
      this.setState({
        user: initialState.user,
      });
    },
  };

  render() {
    const { state, actions } = this;
    const store = { state, actions };
    return (
      <AppContext.Provider value={store}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppConsumer, AppProvider };
