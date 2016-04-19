import React, { Component, PropTypes } from 'react';
import Account from './account';
import { Heading, Rule } from '../../../components';
import { Spinner, Warning } from '@ftbl/icons';
import Navigation from './navigation';
import Icon from './icon';
import Feed from './feed';

const Message = ({ text, Icon = Spinner, rotate = true, colour = '#666' }) => {
  return (
    <div style={{padding: '4px 12px 4px 0'}}>
      <Icon rotate={rotate} style={{marginTop: -4}} colour={colour} size={24} />
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

        <p style={{color: '#666', margin: '-5px 0 10px 0', paddingTop: 5, clear: 'both'}}>
          Connect your social accounts and RSS feeds
        </p>

        <Icon network='facebook' onConnect={connectTo} />
        <Icon network='twitter' onConnect={connectTo} />
        <Icon network='google' onConnect={connectTo} />
        <Feed onConnect={connectRss} />

        <Rule />

        {accounts.data.map(account => 
          <Account key={account.id} account={account} onConnect={connectTo} onDisconnect={disconnect}/>
        )}

        {accounts.isFetching && <Message text='Loading...' />} 
        {accounts.isConnecting && <Message text='Connecting...' />}
        {accounts.data.length === 0 && !accounts.isFetching && 
          <Message rotate={false} text='No connected accounts' Icon={Warning} />}
      </div>
    );
  }
}
