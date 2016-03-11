import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { resetPassword } from '../ducks/forgotten';
import ForgottenForm from '../components/forgotten';

export class Forgotten extends Component {
  render() {
    const { resetPassword } = this.props;

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
        <ForgottenForm onSubmit={resetPassword}/>
        <Link style={styles.link} to='/signon' data-test='signon-link'>Return to sign on</Link>
      </div>
    );
  }
}

export default connect(state => ({ forgotten: state.forgotten }), { resetPassword })(Forgotten);
