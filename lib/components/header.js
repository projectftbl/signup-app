import React, { Component } from 'react';
import { Link } from 'react-router';
import { Ball, Menu } from '@ftbl/icons';
import Nav from './menu/main';

const Session = ({ session, onSignOut }) => {
  const items = [
    { to: '/member', title: 'Manage Member', indexLink: false, authenticated: true }
  , { to: '/user',   title: session.user && session.user.name, indexLink: false, authenticated: true }
  , {                title: 'Sign Out', onClick: _ => onSignOut(session.user.id), authenticated: true }
  , { to: '/signup', title: 'Sign Up', authenticated: false }
  , { to: '/signon', title: 'Sign On', authenticated: false }
  ];

  return <Nav items={items} style={{ display: 'inline-block', fontSize: '0.8em' }} />;
};

export default class Header extends Component {
  render() {
    const { toggle, menu, session, onSignOut } = this.props;

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
          <Nav items={[ { name: 'admin', Icon: Menu, submenu: items, claim: 'create member' }]} />
        </span>

        <div style={{ position: 'absolute', right: 20, top: 3 }}>
          <Session session={session} onSignOut={onSignOut} />
        </div>
      </div>
    );
  }
};
