import React from 'react';
import Radium from 'radium';
import { IndexLink, Link } from 'react-router';
import Dropdown from './dropdown';

const MenuLink = Radium(props => {
  const { styles, menu, toggle, parent, item: { to, name, title, Icon, indexLink, submenu }} = props;

  let { item: { onClick }} = props;

  if (submenu && toggle) onClick = _ => toggle(name);
  if (parent && toggle) onClick = e => toggle(parent);

  if (to == null) {
    return (
      <a style={[ styles.link.base, styles.link.active ]} onClick={onClick}>
        {Icon && <Icon style={{ marginTop:-8 }} colour='#333' />}
        {title}
      </a>
    );
  }

  const Anchor = indexLink === false ? Link : IndexLink;

  return (
    <Anchor style={styles.link.base} activeStyle={styles.link.active} to={to} onClick={onClick}>
      {Icon && <Icon style={{ marginTop:-8 }} colour='#333' />}
      {title}
    </Anchor>
  );
});

const Item = Radium(({ item, menu, toggle, parent, styles, first, last }) => {
  return (
    <li style={[ styles.item.base, first && styles.item.first, last && styles.item.last ]}>
      <MenuLink item={item} menu={menu} toggle={toggle} parent={parent} styles={styles} />
      {item.submenu && 
        <Dropdown items={item.submenu} parent={item.name} menu={menu} toggle={toggle} active={menu[item.name]} />}
    </li>
  );
});

export default Radium(({ items, menu, toggle, parent, styles, active, style }) => {
  return (
    <ul style={[ styles.menu.base, active && styles.menu.active, style ]}>
      {items.map((item, i) => 
        <Item item={item} menu={menu} toggle={toggle} parent={parent} styles={styles}
              first={i === 0} last={i === items.length-1} key={i} />
      )}
    </ul>
  );
});
