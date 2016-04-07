import React from 'react';

export default props => {
  const { condition } = props;

  const styles = {
    base: {
      position: 'absolute'
    , top: 0
    , height: 45
    , width: '100%'
    , backgroundColor: '#fff'
    , borderBottom: '1px solid #ccc'
    , zIndex: 1031
    }
  };

  if (!condition) return <span/>;

  return <div style={styles.base}>{props.children}</div>;
}