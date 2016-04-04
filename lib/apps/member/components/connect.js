import find from 'lodash/collection/find';
import React, { Component, PropTypes } from 'react';
import Account from './account';
import Heading from '../../../components/heading';

export default class Connect extends Component {
  render() {
    const { disconnect, connectToFacebook, connectToTwitter, connectToGoogle, accounts } = this.props;
    
    const account = network => {
      return find(accounts.data, { network });
    };

    return (
      <div style={{width: '75%'}} data-test='connect-form'>
        <Heading>Connect Social Accounts</Heading>

        <Account network='Facebook' onConnect={connectToFacebook} account={account('facebook')} onDisconnect={disconnect} />
        <Account network='Twitter' onConnect={connectToTwitter} account={account('twitter')} onDisconnect={disconnect} />
        <Account network='Google' onConnect={connectToGoogle} account={account('google')} onDisconnect={disconnect} />
      </div>
    );
  }
}
