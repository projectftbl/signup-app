import React from 'react';

export default ({ colour = '#ccc' }) => {
  const styles = {
    base: {
      marginTop: 15
    , marginBottom: 15
    , color: colour
    , backgroundColor: colour
    , border: 0
    , height: 1
    }
  };

  return <hr style={styles.base} />;
}