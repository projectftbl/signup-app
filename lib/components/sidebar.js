import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Sidebar extends Component {
  render() {
    const { active, children, width = 300, colour = '#000', onClick } = this.props;

    const styles = {
      base: {
        position: 'absolute'
      , top: 0
      , zIndex: 1031
      , width: width
      , height: '100%'
      , transform: 'translate3D(-300px, 0, 0)'
      , transition: 'transform 250ms ease-in-out'
      , background: colour
      }
    , active: {
        transform: 'translate3D(0, 0, 0)'
      }
    };

    return (
      <div style={[ styles.base, active && styles.active ]} onClick={onClick}>
        {children}
      </div>
    );
  }
};