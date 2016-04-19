import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

@Radium
export default class RadiumLink extends Component {
  render() {
    const styles = {
      base: {
        textDecoration: 'none'
      , color: '#333'
      , outline: 'none'
      }
    , active: {
        color: '#000'
      , textDecoration: 'underline'
      }
    };

    const { to, children } = this.props;

    return (
      <Link to={to} style={styles.base} activeStyle={styles.active}>{children}</Link>
    );
  }
};

const Item = ({ to, children }) => {
  const styles = {
    base: {
      display: 'inline'
    , paddingRight: 10
    , margin: 0
    }
  };

  return (
    <li style={styles.base}>  
      <RadiumLink to={to}>{children}</RadiumLink>
    </li>
  );
};

const Menu = _ => {
  const styles = {
    base: {
      listStyle: 'none'
    , padding: 0
    , margin: '0 auto'
    , textAlign: 'center'
    }
  };

  return (
    <ul style={styles.base}>
      <Item to='/faq'>FAQ</Item>
      <Item to='/license'>SMLA</Item>
      <Item to='/contact'>Contact Us</Item>
    </ul>
  );
};

export default _ => {
  const styles = {
    base: {
      clear: 'both'
    , height: 100
    , marginTop: -40
    , paddingBottom: 60
    , width: '100%'
    , borderTop: '1px solid #ddd'
    , backgroundColor: '#fafafa'
    , padding: '10px 20px'
    , position: 'relative'
    , zIndex: 1030
    }
  };

  return (
    <footer style={styles.base}>
      <Menu />
    </footer>
  );
};
