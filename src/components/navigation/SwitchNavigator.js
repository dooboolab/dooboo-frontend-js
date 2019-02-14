// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Intro from '../screen/Intro';
import Temp from '../screen/Temp';

type Props = {
  store: any;
}

type State = {

}

function SwitchNavigator(props: Props, state: State) {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <Switch>
          <Route exact={true} path='/' render={(param) => <Intro {...param} {...props}/>} />
          <Route render={(param) => <Temp {...param} {...props}/>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
