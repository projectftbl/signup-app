import React from 'react';
import Menu from './index';

export default props => {
  const styles = {
    menu: {
      base: {
        listStyle: 'none'
      , fontSize: 16
      , padding: '10px 0 0 0'
      , margin: 0
      , background: '#fff'
      }
    }
  , item: {
      base: {
        display: 'block'
      , paddingTop: 0
      , paddingBottom: 0
      , paddingLeft: 0
      , paddingRight: 0
      , margin: 0
      }
    }
  , link: {
      base: {
        display: 'block'
      , color: '#999'
      , textDecoration: 'none'
      , whiteSpace: 'nowrap'
      , padding: 3
      , cursor: 'pointer'
      , clear: 'both'
      }
    , active: {
        color: '#000'
      }
    , noClick: {
        cursor: 'default'
      }
    , disabled: {
        cursor: 'default'
      , color: '#ccc'
      }
    }
  };

  return <Menu {...props} styles={styles} />;
};

