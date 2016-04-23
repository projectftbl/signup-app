import React from 'react';
import { Menu } from '../../../components';

export default _ => {
  const items = [ 
    { to: '/member', title: 'Edit Member' } 
  , { to: '/member/connect', title: 'Connect' } 
  , { to: '/member/access', title: 'Access' } 
  ];

  const styles = {
    base: {
      fontSize: 20
    , padding: '5px 0 0 0'
    , '@media (max-width: 639px)': {
        fontSize: 18
      , padding: '0 0 5px 0'
      }
    }
  };

  return <Menu items={items} style={styles.base} />;
};