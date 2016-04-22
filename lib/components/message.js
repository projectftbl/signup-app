import React from 'react';
import color from 'color';
import { Warning } from '@ftbl/icons';

const COLOUR = '#fbbd08';

export default ({ message, colour = COLOUR }) => {
  const background = color(colour).lighten(0.6).hexString()
      , foreground = color(colour).darken(0.25).hexString();

  const styles = {
    base: {
      position: 'relative'
    , width: '100%'
    , backgroundColor: background
    , padding: 10
    , borderRadius: 3
    , marginBottom: 10
    , color: foreground
    , clear: 'both'
    }
  };

  return  (
    <div style={styles.base}>
      <Warning colour={foreground} size={20} allowHover={false} style={{float:'left'}} />
      <div style={{paddingLeft: 30}}> {message}</div>
    </div>
  );
};