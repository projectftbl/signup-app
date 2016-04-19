import React from 'react';
import Radium from 'radium';
import Menu from '../menu/main';
import definition from './menu';

export default Radium(props => {
  const { main, user } = definition(props);

  const styles = {
    base: {
      '@media (max-width: 639px)': {
        display: 'none'
      }
    }
  };

  return (
    <span style={styles.base}>
      <span style={{position: 'absolute', top: 6, paddingLeft: 20}}>
        <Menu items={main} />
      </span>

      <div style={{ position: 'absolute', right: 20, top: 6 }}>
        <Menu items={user} />
      </div>
    </span>
  );
});