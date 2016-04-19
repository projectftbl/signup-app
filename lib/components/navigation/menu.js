import React from 'react';
import { Menu } from '@ftbl/icons';
import Search from '../../apps/members/components/search';

export default ({ session, onSignOut }) => {
  const main = [ 
    { name: 'admin', Icon: Menu, claim: 'read member' 
    , submenu: [ 
        { to: '/members', title: 'View Members' } 
      , { to: '/api/members/csv', title: 'Download Members' } 
      ]
    }
  , { component: <Search />, claim: 'read member' }
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

  return { main, user };
};