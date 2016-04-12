import React from 'react';
import { Link } from 'react-router';

export default ({ session, signOut }) => {
  const styles = {
    link: {
      textDecoration: 'none'
    , fontSize: 17
    , fontWeight: 400
    , color: '#000'
    , paddingLeft: 10
    , cursor: 'pointer'
    , outline: 'none'
    }
    , active: {
        textDecoration: 'underline'
      }
  };
  
  return (session.user == null)
    ? <span>
        <Link style={styles.link} activeStyle={styles.active} to='/signup'>Sign Up</Link>
        <Link style={styles.link} activeStyle={styles.active} to='/signon'>Sign On</Link>
      </span>
    : <a style={styles.link} onClick={() => signOut(session.user.id)}>Sign Out</a>;
};
