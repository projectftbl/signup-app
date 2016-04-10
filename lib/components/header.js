import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Ball } from '@ftbl/icons';
import Session from '../apps/sessions/components/session';

export default class Header extends Component {
  render() {
    const { session, onMenuClick, onSignOut } = this.props;

    const styles = {
      base: {
        position: 'relative'
      , borderBottom: '1px solid #ddd'
      , backgroundColor: '#fafafa'
      , padding: '10px 20px'
      }
    };

    return (
      <div style={styles.base}>
        
        <a style={{cursor:'pointer'}} onClick={onMenuClick}>
          <Ball />
        </a> 
        <span style={{paddingLeft: 10, paddingTop: 2}}>Project: FTBL </span>

        <div style={{ position: 'absolute', right: 20, top: 12 }}>
          <Link to='/user'>Profile</Link>
          <Link to='/user/password'>Password</Link>
          <Link to='/member'>Member</Link>
          <Link to='/member/connect'>Connect</Link>
          <Session session={session} signOut={onSignOut}/>
        </div>
      </div>
    );
  }
}
