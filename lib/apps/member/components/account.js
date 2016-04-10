import React, { Component, PropTypes } from 'react';
import { Button } from '@ftbl/form';
import { Err } from '@ftbl/icons';
import Icon from './icon';

const Account = ({ account, onDisconnect }) => {
  if (account == null) return <span/>;

  return (
    <span>
      <a href={account.link} style={{paddingLeft:10}}>{account.name}</a>
      <a onClick={() => onDisconnect(account)} style={{cursor:'pointer', paddingLeft:10}}><Err/></a>
    </span>
  );
};

export default ({ onConnect, onDisconnect, account }) => {
  return (
    <div>
      <Icon network={account.network} onConnect={onConnect} />
      <Account account={account} onDisconnect={onDisconnect} />
    </div>
  );
};
