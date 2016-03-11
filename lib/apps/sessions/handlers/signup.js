import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SignUp extends Component {
  render() {
    const { children } = this.props;

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
        {children}
        <Link style={styles.link} to='/signon' data-test='signon-link'>Return to sign on</Link>
      </div>
    );
  }
}
