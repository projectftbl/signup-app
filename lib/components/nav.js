import React from 'react';
import Radium from 'radium';
import { IndexLink } from 'react-router';

const NavigationLink = Radium(({ to, title, onClick }) => {
  const styles = {
    base: {
      color: '#999'
    , textDecoration: 'none'
    , fontSize: '1.2em'
    , cursor: 'pointer'
    }
  , active: {
      color: '#000'
    }
  };

  if (to == null) return <a style={[ styles.base, styles.active ]} onClick={onClick}>{title}</a>;

  return (
    <IndexLink style={styles.base} activeStyle={styles.active} to={to}>
      {title}
    </IndexLink>
  );
});

const NavigationItem = Radium(props => {
  const styles = {
    base: {
      display: 'inline'
    , paddingTop: 5
    , paddingBottom: 5
    , paddingLeft: 10
    , paddingRight: 10
    , margin: 0
    , borderRight: '1px solid #666'
    }
  , first: {
      paddingLeft: 0
    }
  , last: {
      borderRight: 0
    , paddingRight: 0
    }
  };

  return (
    <li style={[ styles.base, props.first && styles.first, props.last && styles.last ]}>
      <NavigationLink {...props} />
    </li>
  );
});

export default Radium(({ items, style }) => {
  const styles = {
    base: {
      listStyle: 'none'
    , padding: 0
    , margin: '10px 0 20px 0'
    }
  };

  return (
    <ul style={[ styles.base, style ]}>
      {items.map((item, i) => 
        <NavigationItem to={item.to} title={item.title} onClick={item.onClick} 
                        first={i === 0} last={i === items.length-1} key={i} />
      )}
    </ul>
  );
});
