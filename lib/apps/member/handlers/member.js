import React, { Component, PropTypes } from 'react';

export default class Member extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}
