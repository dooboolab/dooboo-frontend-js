// @flow
import React, { Component } from 'react';
import Button from '../shared/Button';

type Props = {
  history: {
    goBack: Function;
  };
  store: any;
}

type State = {

}

class NotFound extends Component<Props, State> {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={() => this.props.history.goBack()}
          btnTxt='back to tab page'
        />
      </div>
    );
  }
}

export default NotFound;
