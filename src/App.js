import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider as Provider, AppConsumer } from './providers';
import { ThemeProvider } from 'styled-components';

import SwitchNavigator from './components/navigation/SwitchNavigator';

ReactDOM.render(
  <Provider>
    <SwitchNavigator/>
  </Provider>,
  document.getElementById('app'),
);
