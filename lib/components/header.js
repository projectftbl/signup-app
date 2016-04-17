import React, { Component } from 'react';
import { Link } from 'react-router';
import { Ball, Menu } from '@ftbl/icons';
import Session from '../apps/sessions/components/session';
import Nav from './menu/main';

export default class Header extends Component {
  render() {
    const { session, toggle, menu, onSignOut } = this.props;

    const styles = {
      base: {
        position: 'relative'
      , padding: '5px 20px 10px 20px'
      }
    };

    const items = [ 
      { to: '/member', title: 'Edit Member' } 
    , { to: '/member/connect', title: 'Connect Accounts' } 
    ];

    return (
      <div style={styles.base}>        
        <Link to='/member' style={{ textDecoration: 'none', color: '#333'}}>
          <Ball style={{ marginTop:-4 }} />
          <strong style={{paddingLeft: 12, fontSize: '1.1em', display: 'inline-block', paddingTop: 9}}>
            Project: FTBL
          </strong>
        </Link>

        <span style={{paddingLeft: 10, position: 'absolute'}}>
          <Nav items={[ { name: 'admin', Icon: Menu, submenu: items }]} toggle={toggle} menu={menu} />
        </span>

        <div style={{ position: 'absolute', right: 20, top: 3 }}>
          <Session session={session} signOut={onSignOut} />
        </div>
      </div>
    );
  }
};
