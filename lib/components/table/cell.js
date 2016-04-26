import React from 'react';
import Radium from 'radium';

export default Radium(({ children, width, align = 'left', hide = false, style }) => {
  const styles = {
    base: {
      float: 'left'
    , textAlign: align
    , width
    , paddingRight: 10 
    , opacity: 1
    , transition: 'all 0.25s ease-in-out'
    }
  , right: {
      paddingRight: 0
    , paddingLeft: 10
    }
  , hide: {
      opacity: 0
    }
  };

  return (
    <span style={[ styles.base, align === 'right' && styles.right, hide && styles.hide, style ]}>
      {children}
    </span>
  );
});
