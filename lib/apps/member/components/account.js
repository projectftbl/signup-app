import React, { Component, PropTypes } from 'react';
import { Button } from '@ftbl/form';
import { Close, Rss } from '@ftbl/icons';
import Icon from './icon';

const Account = ({ account, onDisconnect }) => {
  if (account == null) return <span/>;

  return (
    <span>
      <a href={account.link} style={{paddingLeft: 0, textDecoration: 'none', color: '#333', fontSize: '1.1em'}} target='_blank'>
        {account.name || account.link}
      </a>
      <a onClick={() => onDisconnect(account)} style={{cursor:'pointer', paddingLeft:10}}>
        <Close/>
      </a>
    </span>
  );
};

export default ({ onConnect, onDisconnect, account }) => {
  return (
    <div style={{marginBottom: 10}}>
      {account.network === 'rss' 
        ? <span style={{padding: '4px 12px 4px 4px'}}>
            <Rss size={30} />
          </span>
        : <Icon network={account.network} onConnect={onConnect} />
      }
      <Account account={account} onDisconnect={onDisconnect} />
    </div>
  );
};
