import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { memberSelector } from '../ducks/members';
import { usersSelector, search, add, remove } from '../ducks/users';
import Users from '../components/users';

export class Manage extends Component {
  render() {
    return (
      <Users {...this.props} />
    );
  }
};

const mapStateToProps = createStructuredSelector({
  member: memberSelector
, users: usersSelector
});

export default connect(mapStateToProps, { search, add, remove })(Manage);