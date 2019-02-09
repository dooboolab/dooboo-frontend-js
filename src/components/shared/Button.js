// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { WhiteButton, TransparentButton } from '../ui/Buttons';

type Props = {
  id?: string,
  white?: boolean,
  imgSrc?: any,
  txt?: string,
  onPress: () => void,
  isLoading: boolean,
};

type State = {

};

const Text = styled.span`
  font-size: 14px;
  color: rgb(128, 109, 216);
`;

const LogoImg = styled.img`
  position: absolute;
  left: 16px;
  height: 20px;
  width: 20px;
  object-fit: cover
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export class Button extends Component<Props, State> {
  static defaultProps: Props = {
    onPress: () => {},
    isLoading: false,
  };

  render() {
    const { white, onPress, imgSrc, txt } = this.props;
    if (this.props.white) {
      return (
        <WhiteButton
          style={{ height: '60px' }}
          onPress={() => onPress()}
        >
          {
            this.props.isLoading
              ? <Spinner id='spinner'/>
              : <div>
                {
                  this.props.imgSrc
                    ? <LogoImg
                      src={this.props.imgSrc}
                    />
                    : null
                }
                <Text>{this.props.txt}</Text>
              </div>
          }
        </WhiteButton>
      );
    }
    return (
      <TransparentButton
        style={{ height: '60px' }}
        onPress={() => onPress()}
      >
        {
          this.props.isLoading
            ? <Spinner id='spinner'/>
            : <div>
              {
                this.props.imgSrc
                  ? <LogoImg
                    src={this.props.imgSrc}
                  />
                  : null
              }
              <Text style={{ color: 'white' }}>{this.props.txt}</Text>
            </div>
        }
      </TransparentButton>
    );
  }
}

export default Button;
