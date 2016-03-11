import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { connectToTwitter, connectToFacebook, finish } from '../ducks/connect';
import ConnectForm from '../components/connect';

export class Connect extends Component {
  render() {
    const { connect } = this.props;

    return (
      <div>
        <ConnectForm {...this.props} onSubmit={finish} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, { connectToFacebook, connectToTwitter, finish })(Connect);

