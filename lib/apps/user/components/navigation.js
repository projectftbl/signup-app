import React from 'react';
import { Menu } from '../../../components';

export default _ => {
  const items = [ 
    { to: '/user', title: 'Edit Settings' } 
  , { to: '/user/password', title: 'Change Password' } 
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