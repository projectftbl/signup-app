import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { User } from 'ickle';

@Radium
export default class RadiumLink extends Component {
  render() {
    const styles = {
      base: {
        display: 'block'
      , textDecoration: 'none'
      , color: '#ccc'
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

@Radium 
class Brand extends Component {
  render() {
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

    const { children } = this.props;

    return (
      <Link to='/' style={styles.base}>
        <User colour='#db2828'/> Versus
      </Link>
    );
  }
}

@Radium 
class NavigationHeader extends Component {
  render() {
    const styles = {
      base: {

      }
    };

    const { children, onClick } = this.props;

    return (
      <li style={styles.base} onClick={onClick}>
        <Brand/>
      </li>
    );
  }
}

@Radium
export class Navigation extends Component {
  render() {
    const styles = {
      base: {
        listStyle: 'none'
      , padding: 0
      , margin: 0
      }
    };

    return (
      <ul style={styles.base}>
        <NavigationHeader />
        <NavigationItem to='/profile'>Profile</NavigationItem>
      </ul>
    );
  }
}

export default connect(state => ({ router: state.router }))(Navigation);
