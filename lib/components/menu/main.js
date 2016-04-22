import React from 'react';
import Menu from './index';

export default props => {
  const styles = {
    menu: {
      base: {
        listStyle: 'none'
      , padding: 0
      , margin: '5px 0 20px 0'
      , fontSize: 15
      }
    }
  , item: {
      base: {
        display: 'inline'
      , position: 'relative'
      , paddingTop: 5
      , paddingBottom: 5
      , paddingLeft: 10
      , paddingRight: 10
      , margin: 0
      , borderLeft: '1px solid rgba(0,0,0,0.15)'
      }
    , first: {
        paddingLeft: 0
      , borderLeft: 0
      }
    , last: {
        paddingRight: 0
      }
    }
  , link: {
      base: {
        color: '#999'
      , textDecoration: 'none'
      , cursor: 'pointer'
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
