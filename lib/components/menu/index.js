import reject from 'lodash/collection/reject';
import startsWith from 'lodash/string/startsWith';
import React from 'react';
import Radium from 'radium';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
import Authorizer from '@ftbl/authorize';
import { toggle } from '../../ducks/menu';
import Dropdown from './dropdown';

const MenuLink = Radium(props => {
  const { styles, menu, toggle, parent
        , item: { to, name, title, Icon, indexLink, submenu, component, active = true, disabled }} = props;

  if (component) return component;

  let { item: { onClick }} = props;

  if (submenu && toggle) onClick = _ => toggle(name);
  if (parent && toggle) onClick = _ => toggle(parent);

  if (to == null || startsWith(to, '/api')) {
    return (
      <a style={[ styles.link.base
                , active && styles.link.active
                , onClick == null && styles.link.noClick
                , disabled && styles.link.disabled ]} onClick={!disabled && onClick} href={to}>
        {Icon && <Icon style={{ marginTop:-4, marginRight: title ? 4 : 0 }} colour='#333' />}
        {title}
      </a>
    );
  }

  const Anchor = indexLink === false ? Link : IndexLink;

  return (
    <Anchor style={styles.link.base} activeStyle={styles.link.active} to={to} onClick={onClick}>
      {Icon && <Icon style={{ marginTop:-4, marginRight: title ? 4 : 0 }} colour='#333' />}
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

const Menu = Radium(({ items, menu, toggle, parent, styles, active, style, session: { user }}) => {
  const authorizer = new Authorizer(Authorizer.fromUser(user));

  const unauthorized = item => (item.claim && authorizer.can(item.claim) === false) || 
                               (item.claim && user == null) ||
                               (item.authenticated === true && user == null) ||
                               (item.authenticated === false && user != null) ||
                               (item.condition && item.condition() === false);

  const filtered = _(items).reject(unauthorized).value();

  return (
    <ul style={[ styles.menu.base, active && styles.menu.active, style ]}>
      {filtered.map((item, i) => 
        <Item item={item} menu={menu} toggle={toggle} parent={parent} styles={styles}
              first={i === 0} last={i === filtered.length-1} key={i} />
      )}
    </ul>
  );
});

export default connect(state => ({ session: state.session, menu: state.menu }), { toggle })(Menu);
