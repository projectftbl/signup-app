import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { signOn, signOnToFacebook, signOnToTwitter } from '../ducks/session';
import SignOnForm from '../views/signOn';
import { Button } from 'ferox';

export class SignOn extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(previous) {
    const { session, reset, push } = this.props;

    if (session.user && !previous.session.user) {
      reset('signOn');
      push(session.user.shouldChangePassword ? '/profile/password' : '/timeline');
    }
  }

  handleSubmit(data) {
    this.props.signOn(data);
  }

  render() {
    const { session, signOnToFacebook, signOnToTwitter } = this.props;

    const styles = {
      link: {
        textDecoration: 'none'
      , paddingTop: 20
      , display: 'block'
      , color: '#31c0b5'
      , fontSize: 17
      , fontWeight: 400
      }
    };

    return (
      <div>
        <SignOnForm onSubmit={this.handleSubmit} message={session.error}/>

        <Button label='Facebook' onClick={signOnToFacebook} />
        <Button label='Twitter' onClick={signOnToTwitter} />

        <Link style={styles.link} to='/register' data-test='register-link'>Not yet registered?</Link>
        <Link style={styles.link} to='/forgotten' data-test='forgotten-link'>Forgotten your password?</Link>
      </div>
    );
  }
}

export default connect(state => ({ session: state.session }), { reset, push, signOn, signOnToFacebook, signOnToTwitter })(SignOn);
