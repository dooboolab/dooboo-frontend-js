// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

import Intro from '../screen/Intro';
import NotFound from '../screen/NotFound';

type Props = {
  store: any;
}

type State = {

}

@inject('store')
class RootStackNavigator extends Component<Props, State> {
  componentDidMount() {
    console.log(`userLang: ${this.props.store.locale.LANG}`);
  }

  render() {
    return (
      <BrowserRouter>
        <div style={{ textAlign: 'center' }}>
          <Switch>
            <Route exact={true} path='/' component={Intro} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RootStackNavigator;
