import React, { Component } from 'react';
import { Link } from 'react-router';
import { Ball, Menu, User } from '@ftbl/icons';
import Nav from './menu/main';
import Search from '../apps/members/components/search';

export default class Header extends Component {
  render() {
    const { toggle, menu, session, onSignOut } = this.props;

    const styles = {
      base: {
        position: 'relative'
      , padding: '5px 20px 10px 20px'
      , borderBottom: '1px solid rgba(0,0,0,.15)'
      }
    };

    const main = [ 
      { name: 'admin', Icon: Menu, claim: 'create member' 
      , submenu: [ 
          { to: '/members', title: 'View Members' } 
        , { to: '/api/members/csv', title: 'Download Members' } 
        ]
      }
    , { component: <Search />, claim: 'create member' }
    ];

    const user = [
      { to: '/signup', title: 'Sign Up', authenticated: false }
    , { to: '/signon', title: 'Sign On', authenticated: false }
    , { to: '/member', title: 'Manage Member', indexLink: false, authenticated: true }
    , { to: '/user', name: 'user', title: session.user && session.user.name, authenticated: true
      // , submenu: [
      //     { to: '/user', title: 'Edit Profile', indexLink: true, authenticated: true }
      //   , { to: '/user/password', title: 'Change Password', indexLink: true, authenticated: true }
      //   , { title: 'Sign Out', onClick: _ => onSignOut(session.user.id), authenticated: true }
      //   ]
      }
    , { title: 'Sign Out', onClick: _ => onSignOut(session.user.id), authenticated: true }
    ];

    return (
      <div style={styles.base}>        
        <Link to='/member' style={{textDecoration: 'none', color: '#333'}}>
          <Ball style={{ marginTop:-4 }} />
          <strong style={{paddingLeft: 12, fontSize: '1.1em', display: 'inline-block', paddingTop: 9}}>
            Project: FTBL
          </strong>
        </Link>

        <span style={{position: 'absolute', top: 6, paddingLeft: 20}}>
          <Nav items={main} />
        </span>

        <div style={{ position: 'absolute', right: 20, top: 6 }}>
          <Nav items={user} />
        </div>
      </div>
    );
  }
};
