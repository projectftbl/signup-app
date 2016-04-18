import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { membersSelector } from '../ducks/members';
import Results from '../components/results';

export class Members extends Component {
  render() {
    return (
      <Results {...this.props} />
    );
  }
};

const mapStateToProps = createStructuredSelector({
  members: membersSelector
});

export default connect(mapStateToProps)(Members);

