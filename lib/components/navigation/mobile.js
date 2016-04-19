import React from 'react';
import Radium from 'radium';
import Menu from '../menu/mobile';
import definition from './menu';

export default Radium(props => {
  const { main, user } = definition(props);

  const styles = {
    base: {
      position: 'relative'
    , marginTop: -30
    , '@media (min-width: 640px)': {
        display: 'none'
      }
    }
  };

  return (
    <span style={styles.base}>
      <div>
        <Menu items={user} />
      </div>
    </span>
  );
});