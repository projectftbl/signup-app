import React, { Component, PropTypes } from 'react';
import Account from './account';
import { Heading, Rule } from '../../../components';
import { Spinner } from '@ftbl/icons';
import Navigation from './navigation';
import Icon from './icon';
import Feed from './feed';

const Loading = ({ text }) => {
  return (
    <div style={{padding: '4px 12px 4px 4px'}}>
      <Spinner rotate={true} style={{marginTop: -4}} colour='#666' size={24} />
      <span style={{paddingLeft: 10}}>{text}</span>
    </div>
  );
};

export default class Connect extends Component {
  render() {
    const { disconnect, connectTo, connectRss, accounts } = this.props;
    
    return (
      <div data-test='connect-form'>
        <Navigation />

        <Icon network='facebook' colour='#333' onConnect={connectTo} />
        <Icon network='twitter' colour='#333' onConnect={connectTo} />
        <Icon network='google' colour='#333' onConnect={connectTo} />
        <Feed colour='#333' onConnect={connectRss} />

        <Rule />

        {accounts.data.map(account => 
          <Account key={account.id} account={account} onConnect={connectTo} onDisconnect={disconnect}/>
        )}

        {accounts.isFetching ? <Loading text='Loading...' /> : <span/>} 
        {accounts.isConnecting ? <Loading text='Connecting...' /> : <span/>} 
      </div>
    );
  }
}
