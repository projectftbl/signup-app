import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { disconnect, connectTo, connectRss } from '../ducks/accounts';
import { accountsSelector } from '../ducks/accounts';
import ConnectForm from '../components/connect';

export class Connect extends Component {
  render() {
    return (
      <div>
        <ConnectForm {...this.props} />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  session: state => state.session
, accounts: accountsSelector
});

export default connect(mapStateToProps, { disconnect, connectTo, connectRss })(Connect);

