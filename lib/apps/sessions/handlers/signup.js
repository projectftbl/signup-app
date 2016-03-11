import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { register } from '../ducks/register';
import { connectToTwitter, connectToFacebook, finish } from '../ducks/connect';
import RegisterForm from '../components/register';
import ConnectForm from '../components/connect';

export class SignUp extends Component {
  render() {
    const { register, finish, member } = this.props;

    const styles = {
      link: {
        textDecoration: 'none'
      , paddingTop: 20
      , display: 'block'
      , color: '#000'
      , fontSize: 17
      , fontWeight: 400
      }
    };

    const form = member.member == null
      ? <RegisterForm {...this.props} onSubmit={register} />
      : <ConnectForm {...this.props} onSubmit={finish} />

    return (
      <div>
        {form}

        <Link style={styles.link} to='/signon' data-test='signon-link'>Return to sign on</Link>
      </div>
    );
  }
}

export default connect(state => ({ member: state.member.member }), { register, connectToTwitter, connectToFacebook, finish })(SignUp);

