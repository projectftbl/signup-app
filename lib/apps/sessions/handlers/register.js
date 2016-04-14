import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { register } from '../ducks/register';
import { Welcome } from '../../../components';
import RegisterForm from '../components/register';

export class Register extends Component {
  render() {
    const { register, member } = this.props;

    return (
      <Welcome>
        <RegisterForm {...this.props} onSubmit={register} />
      </Welcome>
    );
  }
}

export default connect(state => ({ member: state.member.member, signup: state.register }), { register })(Register);
