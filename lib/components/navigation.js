import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { Ball } from '@ftbl/icons';

@Radium
export default class RadiumLink extends Component {
  render() {
    const styles = {
      base: {
        display: 'block'
      , textDecoration: 'none'
      , color: '#000'
      , padding: '10px 20px'
      , transition: 'all 250ms ease-in'
      }
    , active: {
        color: '#fff'
      , backgroundColor: '#c00'
      }
    };

    const { to, children } = this.props;

    return (
      <Link to={to} style={styles.base} activeStyle={styles.active}>{children}</Link>
    );
  }
};

@Radium 
class NavigationItem extends Component {
  render() {
    const styles = {
      base: {
        opacity: 1
      , transition: 'all 250ms ease-in'
      }
    , hidden: {
        opacity: 0
      }
    };

    const { children, hidden, onClick } = this.props;

    return (
      <li style={[ styles.base, hidden && styles.hidden ]} onClick={onClick}>
        <RadiumLink {...this.props}>{children}</RadiumLink>
      </li>
    );
  }
}

const NavigationHeader = props => {
  const styles = {
    base: {
      display: 'block'
    , fontSize: '1.2em'
    , color: '#eee'
    , textDecoration: 'none'
    , padding: 18
    , borderBottom: '1px solid transparent'
    }
  };

  return (
    <li onClick={props.onClick}>
      <Link to={props.to} style={styles.base}>
        <Ball colour='#db2828'/> Project: FBTL
      </Link>
    </li>
  );
}

export default props => {
  const styles = {
    base: {
      listStyle: 'none'
    , padding: 0
    , margin: 0
    }
  };

  const onNavigate = e => { 
    e.stopPropagation(); 
    setTimeout(() => props.onNavigate(), 200); 
  };

  return (
    <ul style={styles.base}>
      <NavigationHeader to='/timeline' onClick={onNavigate}/>
      <NavigationItem to='/timeline' onClick={onNavigate}>Timeline</NavigationItem>
      <NavigationItem to='/member' onClick={onNavigate}>Profile</NavigationItem>
      <NavigationItem to='/moderate' onClick={onNavigate}>Moderation</NavigationItem>
    </ul>
  );
}