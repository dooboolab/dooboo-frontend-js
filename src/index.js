import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider as Provider } from './providers';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import RootStackNavigator from './components/navigation/RootStackNavigator';

if (navigator) {
  // const userLang: string = navigator.language;
  // const localization = new Localization();
  // localization.LANG = userLang ? userLang.substring(0, 2) : '';
  // store.locale = localization;
}

ReactDOM.render(
  <Provider>
    <ThemeProvider theme={theme}>
      <RootStackNavigator />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
