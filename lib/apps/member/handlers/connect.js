import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { disconnect, connectTo, connectRss, connectPage } from '../ducks/accounts';
import { accountsSelector } from '../ducks/accounts';
import ConnectForm from '../components/connect';

export class Connect extends Component {
  render() {
    return (
      <ConnectForm {...this.props} />
    );
  }
};

const mapStateToProps = createStructuredSelector({
  session: state => state.session
, accounts: accountsSelector
});

export default connect(mapStateToProps, { disconnect, connectTo, connectRss, connectPage })(Connect);

