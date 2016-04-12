import React, { Component, PropTypes } from 'react';
import { Welcome } from '../../../components';

export default class User extends Component {
  render() {
    const { children } = this.props;

    return (
      <Welcome>
        {children}
      </Welcome>
    );
  }
}
