// @flow
import React, { Component } from 'react';
import Button from '../shared/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: 'flex',
  justify-content: 'center',
`;

type Props = {
  history: any,
};

type State = {

};

class NotFound extends Component<Props, State> {
  render() {
    const { history } = this.props;
    return (
      <Container>
        <Button
          id='btn'
          onClick={() => history.goBack()}
          txt='back to tab page'
        />
      </Container>
    );
  }
}

export default NotFound;
