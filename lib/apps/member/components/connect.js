import find from 'lodash/collection/find';
import React, { Component, PropTypes } from 'react';
import Account from './account';
import Heading from '../../../components/heading';
import { Instagram, YouTube, Rss, Facebook, Twitter } from '@ftbl/icons';

export default class Connect extends Component {
  render() {
    const { disconnect, connectToFacebook, connectToTwitter, connectToGoogle, accounts } = this.props;
    
    const account = network => {
      return find(accounts.data, { network });
    };

    return (
      <div data-test='connect-form'>
        <Heading>Connect Social Accounts</Heading>

        <Facebook colour='#000' size={36} />
        <Twitter colour='#000' size={36} />
        <YouTube colour='#000' size={36} />
        <Rss colour='#000' size={36} />

        <Account network='Facebook' onConnect={connectToFacebook} account={account('facebook')} onDisconnect={disconnect} />
        <Account network='Twitter' onConnect={connectToTwitter} account={account('twitter')} onDisconnect={disconnect} />
        <Account network='Google' onConnect={connectToGoogle} account={account('google')} onDisconnect={disconnect} />
      </div>
    );
  }
}
