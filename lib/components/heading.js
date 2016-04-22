import React from 'react';
import Radium from 'radium';

export default Radium(({ children, style }) => {
  const styles = {
    base: {
      position: 'relative'
    , paddingTop: 10
    , paddingBottom: 20
    , fontSize: 20
    , fontWeight: 400
    }
  };

  return <div style={[ styles.base, style ]}>{children}</div>;
});