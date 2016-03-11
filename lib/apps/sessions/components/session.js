import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Session extends Component {

  render() {
    const { session } = this.props;

    const styles = {
      link: {
        textDecoration: 'none'
      , fontSize: 17
      , fontWeight: 400
      , color: '#000'
      }
    };
    
    return (session.user == null)
      ? <Link style={styles.link} to='/signon'>Sign On</Link>
      : <Link style={styles.link} to='/signout'>Sign Out</Link>;
  }
}
