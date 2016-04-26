import reject from 'lodash/collection/reject';
import startsWith from 'lodash/string/startsWith';
import React from 'react';
import Radium from 'radium';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
import { authorize } from '../../support/authorize';
import { toggle } from '../../ducks/menu';
import Dropdown from './dropdown';

const MenuLink = Radium(props => {
  const { styles, menu, toggle, parent
        , item: { to, name, title, Icon, indexLink, submenu, component, active = true, disabled, divider }} = props;

  if (divider) return <span/>;
  if (component) return component;

  let { item: { onClick }} = props;

  const itemClick = onClick;

  if (submenu && toggle) {
    onClick = _ => {
      toggle(name);
      if (itemClick) itemClick();
    }
  }
  if (parent && toggle) {
    onClick = _ => {
      toggle(parent);
      if (itemClick) itemClick();
    };
  }

  if (to == null || startsWith(to, '/api')) {
    return (
      <a style={[ styles.link.base
                , active && styles.link.active
                , onClick == null && styles.link.noClick
                , disabled && styles.link.disabled ]} onClick={!disabled && onClick} href={to}>
        {title}
        {Icon && <Icon style={{ marginTop:-4, marginLeft: title ? 4 : 0 }} colour='#333' />}
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
    <li style={[ styles.item.base, first && styles.item.first, last && styles.item.last, item.divider && styles.item.divider ]}>
      <MenuLink item={item} menu={menu} toggle={toggle} parent={parent} styles={styles} />
      {item.submenu && 
        <Dropdown items={item.submenu} 
                  parent={item.name} 
                  align={item.align} 
                  menu={menu} 
                  toggle={toggle} 
                  active={menu[item.name]} 
                  style={item.style && item.style.dropdown} />}
    </li>
  );
});

const Menu = Radium(({ items, menu, toggle, parent, align, styles, active, style, session: { user }}) => {
  const unauthorized = item => (item.claim && authorize(item.claim, user) === false) || 
                               (item.claim && user == null) ||
                               (item.authenticated === true && user == null) ||
                               (item.authenticated === false && user != null) ||
                               (item.condition && item.condition() === false);

  const filtered = _(items).reject(unauthorized).value();

  if (filtered.length === 0) return <span/>;

  return (
    <ul style={[ styles.menu.base, active && styles.menu.active, align === 'right' && styles.menu.right, style ]}>
      {filtered.map((item, i) => 
        <Item item={item} menu={menu} toggle={toggle} parent={parent} styles={styles}
              first={i === 0} last={i === filtered.length-1} key={i} />
      )}
    </ul>
  );
});

export default connect(state => ({ session: state.session, menu: state.menu }), { toggle })(Menu);
