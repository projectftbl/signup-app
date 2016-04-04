import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Session extends Component {

  render() {
    const { session, signOut } = this.props;

    const styles = {
      link: {
        textDecoration: 'none'
      , fontSize: 17
      , fontWeight: 400
      , color: '#000'
      , cursor: 'pointer'
      , outline: 'none'
      }
    };
    
    return (session.user == null)
      ? <Link style={styles.link} to='/signon'>Sign On</Link>
      : <a style={styles.link} onClick={() => signOut(session.user.id)}>Sign Out</a>;
  }
}
