import React from 'react';
import Menu from './index';

export default props => {
  const styles = {
    menu: {
      base: {
        position: 'absolute'
      , listStyle: 'none'
      , fontSize: 15
      , background: '#fff'
      , width: 'auto'
      , border: '1px solid rgba(0,0,0,.15)'
      , boxShadow: '0 4px 12px rgba(0,0,0,.175)'
      , margin: '2px 0'
      , padding: '5px 0'
      , top: 34
      , left: -1
      , textAlign: 'left'
      , opacity: 0
      , zIndex: -1
      , transition: 'all 0.15s ease-in'
      }
    , right: {
        left: undefined
      , right: -1
      }
    , active: {
        zIndex: 1036
      , opacity: 1
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
    , divider: {
        cursor: 'default'
      , margin: '0 0 5px 0'
      , paddingBottom: 0
      , borderBottom: '1px solid #eee'
      , ':hover': {
          background: 'transparent'        
        }
      }
    }
  , link: {
      base: {
        display: 'block'
      , color: '#333'
      , fontWeight: 300
      , textDecoration: 'none'
      , whiteSpace: 'nowrap'
      , padding: 3
      , cursor: 'pointer'
      , clear: 'both'
      , lineHeight: 1.4
      }
    , active: {
        color: '#000'
      , fontWeight: 400
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

