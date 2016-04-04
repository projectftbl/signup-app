import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signOn, signOnToFacebook, signOnToTwitter, signOnToGoogle } from '../ducks/session';
import { Button } from 'ferox';
import SignOnForm from '../components/signon';

export class SignOn extends Component {
  render() {
    const { session, signOn, signOnToFacebook, signOnToTwitter, signOnToGoogle } = this.props;

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

    return (
      <div>
        <SignOnForm onSubmit={signOn} message={session.error}/>

        {/*<Button label='Facebook' onClick={signOnToFacebook} />
        <Button label='Twitter' onClick={signOnToTwitter} />
        <Button label='Google' onClick={signOnToGoogle} />*/}

        <Link style={styles.link} to='/signup' data-test='signup-link'>Not yet signed up?</Link>
        <Link style={styles.link} to='/forgotten' data-test='forgotten-link'>Forgotten your password?</Link>
      </div>
    );
  }
}

export default connect(state => ({ session: state.session }), { signOn, signOnToFacebook, signOnToTwitter, signOnToGoogle })(SignOn);
