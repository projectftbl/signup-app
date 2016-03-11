import React, { Component, PropTypes } from 'react';
import { Menu } from 'ickle';
import Session from '../apps/sessions/components/session';

export default class Header extends Component {
  render() {
    const { session } = this.props;

    const styles = {
      base: {
        borderBottom: '1px solid #ddd'
      , backgroundColor: '#fafafa'
      }
    };

    return (
      <div style={styles.base}>
        <div style={{float:'right'}}>
          <Session session={session}/>
        </div>
      </div>
    );
  }
}
