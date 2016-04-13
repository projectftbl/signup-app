import React from 'react';
import license from '../data/license.md';
import Markdown from 'react-markdown';

export default props => {
  const styles={
    base: {
      margin: '0 auto'
    , width: '50%'
    , minWidth: 400
    , paddingBottom: 20
    }
  };

  return (
    <div style={styles.base}>
      <Markdown source={license} />
    </div>
  );
};