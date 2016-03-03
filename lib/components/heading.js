import React from 'react';

export default props => {
  const styles = {
    base: {
      paddingTop: 10
    , paddingBottom: 10
    , fontSize: 20
    , fontWeight: 400
    }
  };

  return <div style={styles.base}>{props.children}</div>;
}