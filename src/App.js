import React from 'react';
import { render, hydrate } from 'react-dom';
import { AppProvider as Provider, AppConsumer } from './providers';
import { ThemeProvider } from 'styled-components';

import SwitchNavigator from './components/navigation/SwitchNavigator';

const rootElement = document.getElementById('app');

const Component = () => (
  <Provider>
    <SwitchNavigator/>
  </Provider>
);

const renderApp = () => {
  if (rootElement.hasChildNodes()) {
    hydrate(<Component />, rootElement);
  } else {
    render(<Component />, rootElement);
  }
};

renderApp();

if (module.hot) module.hot.accept(['./components/navigation/SwitchNavigator'], () => renderApp());
