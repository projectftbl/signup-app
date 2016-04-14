import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signOn, signOnToFacebook, signOnToTwitter, signOnToGoogle } from '../ducks/session';
import { Welcome } from '../../../components';
import SignOnForm from '../components/signon';

export class SignOn extends Component {
  render() {
    const { signOn, session: { isReloading }} = this.props;

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

    if (isReloading) return <div/>;

    return (
      <Welcome>
        <SignOnForm onSubmit={signOn} {...this.props} />

        <Link style={styles.link} to='/forgotten' data-test='forgotten-link'>Forgotten your password?</Link>
      </Welcome>
    );
  }
};

export default connect(state => ({ session: state.session }), { signOn })(SignOn);
