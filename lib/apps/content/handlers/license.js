import React from 'react';
import Radium from 'radium';
import license from '../data/license.md';
import Markdown from 'react-markdown';

export default Radium(props => {
  const styles={
    base: {
      margin: '0 auto'
    , width: '60%'
    , minWidth: 400
    , paddingBottom: 20
    , '@media (max-width: 639px)': {
        margin: 0
      , width: '100%'
      , minWidth: 0
      }
    }
  };

  return (
    <div style={styles.base}>
      <Markdown source={license} />
    </div>
  );
});