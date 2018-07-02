import React, { Component } from 'react';

const classes = require('./Button.css');

type Props = {

}

type State = {

}

class Button extends Component<Props, State> {
  render() {
    return (
      <div
        className={classes.btn}
        style={
          this.props.white
            ? { borderColor: '#fff', color: '#fff' }
            : { borderColor: '#000', color: '#000' }
        }
        onClick={() => this.props.onClick()}
      >
        {
          this.props.imgSrc
            ? <img
              src={this.props.imgSrc}
              srcSet={this.props.srcset}
              className={classes.logoImg}
            />
            : null
        }
        <span
          className={classes.txt}
        >{this.props.txt}</span>
      </div>
    );
  }
}

export default Button;
