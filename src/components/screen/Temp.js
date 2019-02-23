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

function Temp(props: Props, state: State) {
  const { history } = props;
  return (
    <Container>
      <Button
        onClick={() => history.goBack()}
        text='back to tab page'
      />
    </Container>
  );
}

export default Temp;
