import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { Ball } from '@ftbl/icons';
import { Desktop, Mobile } from './navigation';

export default class Header extends Component {
  render() {
    const styles = {
      base: {
        position: 'relative'
      , padding: '5px 20px 10px 20px'
      , borderBottom: '1px solid rgba(0,0,0,.15)'
      }
    };

    return (
      <div style={styles.base}>        
        <Link to='/member' style={{textDecoration: 'none', color: '#333'}}>
          <Ball style={{ marginTop:-4 }} />
          <strong style={{paddingLeft: 12, fontSize: '1.1em', display: 'inline-block', paddingTop: 9}}>
            Project: FTBL
          </strong>
        </Link>

        <Desktop {...this.props} />
        <Mobile {...this.props} />
      </div>
    );
  }
};
