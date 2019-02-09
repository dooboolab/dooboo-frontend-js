// @flow
import React, { Component } from 'react';
import Button from '../shared/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  padding: 50px;
`;

type Props = {
  history: any,
};

type State = {

};

class Temp extends Component<Props, State> {
  render() {
    const { history } = this.props;
    return (
      <Container>
        <Button
          id='btn'
          onPress={() => history.goBack()}
          txt='back to tab page'
        />
      </Container>
    );
  }
}

export default Temp;
