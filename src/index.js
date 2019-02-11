import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider as Provider, AppConsumer } from './providers';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import RootStackNavigator from './components/navigation/RootStackNavigator';

ReactDOM.render(
  <Provider>
    <AppConsumer>
      {
        (data) => {
          return (
            <ThemeProvider theme={theme}>
              <RootStackNavigator store={data}/>
            </ThemeProvider>
          );
        }
      }
    </AppConsumer>
  </Provider>,
  document.getElementById('app'),
);
