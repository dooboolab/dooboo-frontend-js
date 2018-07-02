// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Button from '../shared/Button';

import classNames from 'classnames/bind';
const classes = require('./Intro.css');
const cx = classNames.bind(classes);

type Props = {
  store: any;
}

type State = {

}

@inject('store') @observer
class Intro extends Component<Props, State> {
  render() {
    const { getString } = this.props.store.locale;
    const containerClass = cx({
      container: true,
      background: true,
    });
    return (
      <div className={containerClass}>
        <div className={classes.box}>
          <Button
            onClick={() => this.onClick()}
            white={true}
            txt={getString('BUTTON')}
          />
        </div>
      </div>
    );
  }

  onClick = () => {
    alert('clicked');
  }
}

export default Intro;
