import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider as Provider, AppConsumer } from './providers';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import SwitchNavigator from './components/navigation/SwitchNavigator';

ReactDOM.render(
  <Provider>
    <ThemeProvider theme={theme}>
      <SwitchNavigator/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
