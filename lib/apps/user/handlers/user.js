import React, { Component, PropTypes } from 'react';

export default class User extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}
