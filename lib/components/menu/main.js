import React from 'react';
import Menu from './index';

export default props => {
  const styles = {
    menu: {
      base: {
        listStyle: 'none'
      , padding: 0
      , margin: '10px 0 20px 0'
      }
    }
  , item: {
      base: {
        display: 'inline'
      , paddingTop: 5
      , paddingBottom: 5
      , paddingLeft: 10
      , paddingRight: 10
      , margin: 0
      , borderRight: '1px solid rgba(0,0,0,0.15)'
      }
    , first: {
        paddingLeft: 0
      }
    , last: {
        borderRight: 0
      , paddingRight: 0
      }
    }
  , link: {
      base: {
        color: '#999'
      , textDecoration: 'none'
      , fontSize: '1.2em'
      , cursor: 'pointer'
      }
    , active: {
        color: '#000'
      }
    }
  };

  return <Menu {...props} styles={styles} />;
};

