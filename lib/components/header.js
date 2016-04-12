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
      , padding: '10px 20px'
      }
    };

    return (
      <div style={styles.base}>        
        <Ball />
        <strong style={{paddingLeft: 12, fontSize: '1.1em'}}>Project: FTBL </strong>

        <div style={{ position: 'absolute', right: 20, top: 12 }}>
          <Link to='/user'>Profile</Link>&nbsp;
          <Link to='/user/password'>Password</Link>&nbsp;
          <Link to='/member'>Member</Link>&nbsp;
          <Link to='/member/connect'>Connect</Link>&nbsp;
          <Session session={session} signOut={onSignOut}/>
        </div>
      </div>
    );
  }
}
