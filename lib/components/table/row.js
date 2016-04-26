import React from 'react';
import Radium from 'radium';

export default Radium(({ children, kind, last, style, onClick, onMouseOver, onMouseOut }) => {
  const styles = {
    base: {
      cursor: 'pointer'
    , paddingTop: 5
    , paddingBottom: 5
    , marginTop: 0
    , marginBottom: 0
    , borderBottom: '1px solid transparent'
    , clear: 'both'
    }
  , underline: {
      borderBottom: '1px solid #eee'
    }
  , heading: {
      color: '#666'
    , fontSize: '0.9em'
    , overflow: 'hidden'
    }
  , empty: {
      borderBottom: '2px solid transparent'
    }
  , last: {
      borderBottom: '1px solid transparent'
    }
  };

  return (
    <div onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}
         style={[ styles.base
                , kind === 'underline' && styles.underline
                , kind === 'heading' && styles.heading
                , kind === 'empty' && styles.empty
                , last && styles.last
                , style ]}>
      {kind === 'empty' && <br/>}
      {kind !== 'empty' && children}
    </div>
  );
});
