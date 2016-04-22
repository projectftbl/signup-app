import React from 'react';
import { Close } from '@ftbl/icons';
import Icon from './icon';

export default ({ onConnect, onDisconnect, account }) => {
  return (
    <div style={{marginBottom: 10}}>
      <Icon size={24} network={account.network} onConnect={onConnect} shape='square'/>
      
      <span>
        <a href={account.link} style={{paddingLeft: 0, textDecoration: 'none', color: '#333', fontSize: '1.1em'}} target='_blank'>
          {account.name || account.link}
        </a>
        <a onClick={_ => onDisconnect(account)} style={{cursor:'pointer', paddingLeft:10}}>
          <Close style={{marginTop:-4}}/>
        </a>
      </span>
    </div>
  );
};
