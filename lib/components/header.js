import React, { Component } from 'react';
import { Link } from 'react-router';
import { Ball, Menu } from '@ftbl/icons';
import Session from '../apps/sessions/components/session';
import Dropdown from './dropdown';

const items = [ 
  { to: '/member', title: 'Edit Member' } 
, { to: '/member/connect', title: 'Connect Accounts' } 
];

export default class Header extends Component {
  render() {
    const { session, onMenu, menu, onSignOut } = this.props;

    const styles = {
      base: {
        position: 'relative'
      , padding: '5px 20px 10px 20px'
      }
    };

    const toggle = _ => onMenu('admin');

    return (
      <div style={styles.base}>        
        <Link to='/member' style={{ textDecoration: 'none', color: '#333'}}>
          <Ball style={{ marginTop:-4 }} />
          <strong style={{paddingLeft: 12, fontSize: '1.1em', display: 'inline-block', paddingTop: 9}}>
            Project: FTBL
          </strong>
        </Link>

        <span style={{paddingLeft: 10, position: 'relative'}}>
          <Menu style={{ marginTop:-4, marginRight: 10, cursor: 'pointer' }} 
                colour='#333' onClick={toggle} />
          <Dropdown items={items} active={menu.admin} toggle={toggle} />
        </span>

        <div style={{ position: 'absolute', right: 20, top: 3 }}>
          <Session session={session} signOut={onSignOut} />
        </div>
      </div>
    );
  }
};
