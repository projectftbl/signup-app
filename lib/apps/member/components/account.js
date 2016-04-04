import React, { Component, PropTypes } from 'react';
import { Button } from 'ferox';
import { Err } from '@ftbl/icons';

const Account = props => {
  const { account, onDisconnect } = props;

  if (account == null) return <span/>;

  return (
    <span>
      <a href={account.link}>{account.name}</a>
      <a onClick={onDisconnect} style={{cursor:'pointer'}}><Err/></a>
    </span>
  );
};

export default props => {
  const { onConnect, onDisconnect, network, account } = props;
  
  const disconnect = () => { onDisconnect(account); };

  return (
    <div>
      <Button label={network} onClick={onConnect} />
      <Account account={account} onDisconnect={disconnect} />
    </div>
  );
};
