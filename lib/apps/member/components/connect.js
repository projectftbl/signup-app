import React, { Component, PropTypes } from 'react';
import Account from './account';
import { Heading, Rule } from '../../../components';
import Navigation from './navigation';
import Icon from './icon';
import Feed from './feed';

export default class Connect extends Component {
  render() {
    const { disconnect, connectTo, connectRss, accounts } = this.props;
    
    return (
      <div data-test='connect-form'>
        <Navigation />

        <Icon network='facebook' colour='#000' onConnect={connectTo} />
        <Icon network='twitter' colour='#000' onConnect={connectTo} />
        <Icon network='google' colour='#000' onConnect={connectTo} />
        <Feed colour='#000' onConnect={connectRss} />

        <Rule />

        {accounts.data.map(account => 
          <Account key={account.id} account={account} onConnect={connectTo} onDisconnect={disconnect}/>
        )}
      </div>
    );
  }
}
