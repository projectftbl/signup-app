import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { resetPassword } from '../ducks/forgotten';
import { Welcome } from '../../../components';
import ForgottenForm from '../components/forgotten';

export class Forgotten extends Component {
  render() {
    const { resetPassword } = this.props;

    return (
      <Welcome>
        <ForgottenForm onSubmit={resetPassword}/>
      </Welcome>
    );
  }
}

export default connect(state => ({ forgotten: state.forgotten }), { resetPassword })(Forgotten);
