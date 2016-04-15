import React from 'react';
import Radium from 'radium';
import { IndexLink, Link } from 'react-router';

const MenuLink = Radium(({ to, title, useIndexLink = true, onClick, toggle }) => {
  const styles = {
    base: {
      color: '#666'
    , textDecoration: 'none'
    , whiteSpace: 'nowrap'
    , fontSize: '0.9em'
    , padding: 3
    , cursor: 'pointer'
    , clear: 'both'
    , lineHeight: 1.4
    }
  , active: {
      color: '#000'
    }
  };

  const select = e => {
    toggle();
    if (onClick) onClick(e);
  };

  if (to == null) return <a style={[ styles.base, styles.active ]} onClick={select}>{title}</a>;

  const Anchor = useIndexLink ? IndexLink : Link;

  return (
    <Anchor style={styles.base} activeStyle={styles.active} to={to} onClick={select}>
      {title}
    </Anchor>
  );
});

const MenuItem = Radium(props => {
  const styles = {
    base: {
      display: 'block'
    , paddingTop: 5
    , paddingBottom: 5
    , paddingLeft: 10
    , paddingRight: 10
    , margin: 0
    , transition: 'all 0.25s ease-in'
    , ':hover': {
        background: '#eee'
      }
    }
  };

  return (
    <li style={styles.base}>
      <MenuLink {...props} />
    </li>
  );
});

export default Radium(({ items, active, toggle, style }) => {
  const styles = {
    base: {
      position: 'absolute'
    , listStyle: 'none'
    , padding: 0
    , margin: 0
    , background: '#fff'
    , width: 'auto'
    , border: '1px solid rgba(0,0,0,.15)'
    , boxShadow: '0 4px 12px rgba(0,0,0,.175)'
    , margin: '2px 0'
    , padding: '5px 0'
    , top: '100%'
    , left: 10
    , textAlign: 'left'
    , zIndex: 1035
    , opacity: 0
    , transition: 'all 0.15s ease-in'
    }
  , active: {
      opacity: 1
    }
  };

  return (
    <ul style={[ styles.base, active && styles.active, style ]}>
      {items.map((item, i) => 
        <MenuItem to={item.to} title={item.title} onClick={item.onClick} useIndexLink={item.indexLink}
                  first={i === 0} last={i === items.length-1} key={i} toggle={toggle} />
      )}
    </ul>
  );
});
