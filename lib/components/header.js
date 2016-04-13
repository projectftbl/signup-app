import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Ball } from '@ftbl/icons';
import Session from '../apps/sessions/components/session';

export default class Header extends Component {
  render() {
    const { session, onMenuClick, onSignOut } = this.props;

    const styles = {
      base: {
        position: 'relative'
      , padding: '10px 20px'
      }
    };

    return (
      <div style={styles.base}>        
        <Link to='/member' style={{ textDecoration: 'none', color: '#333'}}>
          <Ball style={{ marginTop:-4 }} />
          <strong style={{paddingLeft: 12, fontSize: '1.1em', display: 'inline-block', paddingTop: 9}}>
            Project: FTBL
          </strong>
        </Link>

        <div style={{ position: 'absolute', right: 20, top: 8 }}>
          <Session session={session} signOut={onSignOut}/>
        </div>
      </div>
    );
  }
}
