import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Session extends Component {

  render() {
    const { session } = this.props;
    
    return (session.user == null)
      ? <Link to='/signon'>Sign On</Link>
      : <Link to='/signout'>Sign Out</Link>;
  }
}
