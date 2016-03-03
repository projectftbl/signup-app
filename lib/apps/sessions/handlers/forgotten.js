import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { info } from 'frieze';
import { push } from 'react-router-redux';
import { resetPassword, clear } from '../ducks/forgotten';
import ForgottenForm from '../views/forgotten';

export class Forgotten extends Component {
  componentDidUpdate(previous) {
    const { forgotten, reset, clear, info, push } = this.props;

    if (forgotten.reset && !previous.forgotten.reset) {
      reset('forgotten');
      clear();
      info('Your password has been reset. Please check your inbox.');
      push('/signon');
    }
  }

  render() {
    const { resetPassword } = this.props;

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
        <ForgottenForm onSubmit={resetPassword}/>
        <Link style={styles.link} to='/signon' data-test='signon-link'>Return to sign on</Link>
      </div>
    );
  }
}

export default connect(state => ({ forgotten: state.forgotten }), { reset, push, info, resetPassword, clear })(Forgotten);
