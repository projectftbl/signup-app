import React from 'react';
import Menu from './index';

export default props => {
  const styles = {
    menu: {
      base: {
        position: 'absolute'
      , listStyle: 'none'
      , padding: 0
      , margin: 0
      , fontSize: 15
      , background: '#fff'
      , width: 'auto'
      , border: '1px solid rgba(0,0,0,.15)'
      , boxShadow: '0 4px 12px rgba(0,0,0,.175)'
      , margin: '2px 0'
      , padding: '5px 0'
      , top: 42
      , textAlign: 'left'
      , zIndex: 1036
      , opacity: 0
      , transition: 'all 0.15s ease-in'
      }
    , active: {
        opacity: 1
      }
    }
  , item: {
      base: {
        display: 'block'
      , paddingTop: 5
      , paddingBottom: 5
      , paddingLeft: 10
      , paddingRight: 10
      , margin: 0
      , transition: 'all 0.25s ease-in'
      , ':hover': {
          background: '#eee'
        }
      }
    }
  , link: {
      base: {
        color: '#666'
      , textDecoration: 'none'
      , whiteSpace: 'nowrap'
      , padding: 3
      , cursor: 'pointer'
      , clear: 'both'
      , lineHeight: 1.4
      }
    , active: {
        color: '#000'
      }
    }
  };

  return <Menu {...props} styles={styles} />;
};

