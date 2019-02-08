// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { WhiteButton, DarkButton } from '../ui/Buttons';

type Props = {
  id?: string,
  white?: boolean,
  imgSrc?: any,
  srcset?: any,
  txt?: string,
  onClick: () => void,
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

export class Button extends Component<Props, State> {
  static defaultProps: Props = {
    onClick: () => {},
  };

  render() {
    const { white, onClick, imgSrc, txt, srcset } = this.props;
    if (this.props.white) {
      return (
        <WhiteButton
          onClick={() => onClick()}
        >
          {
            this.props.imgSrc
              ? <LogoImg
                src={this.props.imgSrc}
                srcSet={this.props.srcset}
              />
              : null
          }
          <Text>{this.props.txt}</Text>
        </WhiteButton>
      );
    }
    return (
      <DarkButton
        onClick={() => onClick()}
      >
        {
          this.props.imgSrc
            ? <LogoImg
              src={this.props.imgSrc}
              srcSet={this.props.srcset}
            />
            : null
        }
        <Text>{this.props.txt}</Text>
      </DarkButton>
    );
  }
}

export default Button;
