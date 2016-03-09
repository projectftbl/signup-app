import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { connectToFacebook, connectToTwitter } from '../ducks/connect';
import { Button } from 'ferox';

export class Connect extends Component {
  render() {
    const { member, connectToFacebook, connectToTwitter } = this.props;

    return (
      <div>
        <Button label='Facebook' onClick={() => connectToFacebook(member)} />
        <Button label='Twitter' onClick={() => connectToTwitter(member)} />
      </div>
    );
  }
}

export default connect(state => ({ member: state.member }), { connectToFacebook, connectToTwitter })(Connect);
