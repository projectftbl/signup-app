import React from 'react';
import Radium from 'radium';
import Menu from '../menu/mobile';
import definition from './menu';

export default Radium(props => {
  const { main, user } = definition(props);

  const styles = {
    base: {
      '@media (min-width: 640px)': {
        display: 'none'
      }
    }
  };

  return (
    <div style={styles.base}>
      <Menu items={user} />
    </div>
  );
});