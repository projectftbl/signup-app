import React, { Component, PropTypes } from 'react';
import Account from './account';
import { Heading, Rule } from '../../../components';
import { Spinner } from '@ftbl/icons';
import Navigation from './navigation';
import Icon from './icon';
import Feed from './feed';

const Loading = ({ text }) => {
  return (
    <div style={{padding: '4px 12px 4px 0'}}>
      <Spinner rotate={true} style={{marginTop: -4}} colour='#666' size={24} />
      <span style={{paddingLeft: 15}}>{text}</span>
    </div>
  );
};

export default class Connect extends Component {
  render() {
    const { disconnect, connectTo, connectRss, accounts } = this.props;
    
    return (
      <div data-test='connect-form'>
        <Navigation />

        <p style={{color: '#666', margin: '-5px 0 10px 0'}}>Connect your social accounts and RSS feeds</p>

        <Icon network='facebook' onConnect={connectTo} />
        <Icon network='twitter' onConnect={connectTo} />
        <Icon network='google' onConnect={connectTo} />
        <Feed onConnect={connectRss} />

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
