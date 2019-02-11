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

class SwitchNavigator extends Component<Props, State> {
  render() {
    return (
      <BrowserRouter>
        <div style={{ textAlign: 'center' }}>
          <Switch>
            <Route exact={true} path='/' render={(props) => <Intro {...props} {...this.props}/>} />
            <Route render={(props) => <Temp {...props} {...this.props}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default SwitchNavigator;
