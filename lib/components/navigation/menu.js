import React from 'react';
import { Menu } from '@ftbl/icons';
import Search from '../../apps/members/components/search';

export default ({ session, onSignOut }) => {
  const main = [ 
    { name: 'admin', Icon: Menu, claim: 'read member' 
    , submenu: [ 
        { to: '/members', title: 'View Members' } 
      , { to: '/api/members/csv', title: 'Download Members' } 
      // , { divider: true } 
      // , { to: '/users', title: 'Manage Users' } 
      // , { to: '/roles', title: 'Security' } 
      ]
    }
  , { component: <Search />, claim: 'read member' }
  ];

  const user = [
    { to: '/signup', title: 'Sign Up', authenticated: false }
  , { to: '/signon', title: 'Sign On', authenticated: false }
  , { to: '/member', name: 'member', title: 'Manage Member', indexLink: false, authenticated: true }
    // , submenu: [
    //     { to: '/member', title: 'Edit Member', indexLink: true, authenticated: true }
    //   , { to: '/member/connect', title: 'Connect Accounts', indexLink: true, authenticated: true }
    //   , { to: '/member/access', title: 'Manage Access', indexLink: true, authenticated: true }
    //   , { divider: true }
    //   , { title: 'New Member', authenticated: true }
    //   , { title: 'Switch Member', authenticated: true }
    //   ]
  , { to: '/user', name: 'user', title: session.user && session.user.name, indexLink: false, authenticated: true
    // , submenu: [
    //     { to: '/user', title: 'Edit Profile', authenticated: true }
    //   , { to: '/user/password', title: 'Change Password', authenticated: true }
    //   , { divider: true }
    //   , { title: 'Sign Out', onClick: _ => onSignOut(session.user.id), authenticated: true }
    //   ]
    }
  , { title: 'Sign Out', onClick: _ => onSignOut(session.user.id), authenticated: true }
  ];

  return { main, user };
};