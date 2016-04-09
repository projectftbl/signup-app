import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signOn, signOnToFacebook, signOnToTwitter, signOnToGoogle } from '../ducks/session';
import SignOnForm from '../components/signon';

export class SignOn extends Component {
  render() {
    const { session, signOn } = this.props;

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
        <SignOnForm onSubmit={signOn} message={session.error}/>

        <Link style={styles.link} to='/signup' data-test='signup-link'>Not yet signed up?</Link>
        <Link style={styles.link} to='/forgotten' data-test='forgotten-link'>Forgotten your password?</Link>
      </div>
    );
  }
}

export default connect(state => ({ session: state.session }), { signOn })(SignOn);
