import React from 'react';
import { Nav } from '../../../components';

export default _ => {
  const items = [ 
    { to: '/user', title: 'Edit Profile' } 
  , { to: '/user/password', title: 'Change Password' } 
  ];

  return <Nav items={items} />;
};