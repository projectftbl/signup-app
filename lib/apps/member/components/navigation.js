import React from 'react';
import { Menu } from '../../../components';

export default _ => {
  const items = [ 
    { to: '/member', title: 'Edit Member' } 
  , { to: '/member/connect', title: 'Connect Accounts' } 
  ];

  return <Menu items={items} style={{fontSize:20, padding: '0 0 15px 0'}} />;
};