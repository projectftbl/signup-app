import React, { Component, PropTypes } from 'react';
import { Menu } from 'ickle';
import Session from '../apps/sessions/components/session';

export default class Header extends Component {
  render() {
    const { session } = this.props;

    const styles = {
      base: {
        position: 'relative'
      , borderBottom: '1px solid #ddd'
      , backgroundColor: '#fafafa'
      , padding: 10
      }
    };

    return (
      <div style={styles.base}>
        <span>FTBL</span>
        <div style={{ position: 'absolute', right: 10, top: 10 }}>
          <Session session={session}/>
        </div>
      </div>
    );
  }
}
