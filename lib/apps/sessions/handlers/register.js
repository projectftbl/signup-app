import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { register } from '../ducks/register';
import RegisterForm from '../components/register';

export class Register extends Component {
  render() {
    const { register, member } = this.props;

    const styles = {
      link: {
        textDecoration: 'none'
      , paddingTop: 20
      , display: 'block'
      , color: '#000'
      , fontSize: 17
      , fontWeight: 400
      , outline: 'none'
      }
    };

    return (
      <div>
        <RegisterForm {...this.props} onSubmit={register} />

        <Link style={styles.link} to='/signon' data-test='signon-link'>Return to sign on</Link>
      </div>
    );
  }
}

export default connect(state => ({ member: state.member.member }), { register })(Register);

