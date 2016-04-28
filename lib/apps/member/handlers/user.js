import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { memberSelector, primarySelector } from '../ducks/members';
import { authorizeSelector, Manage } from '../../../support/authorize';
import { usersSelector } from '../ducks/users';
import { resultsSelector, search } from '../ducks/search';
import { add, invite, remove } from '../ducks/users';
import Add from '../components/add';
import Results from '../components/results';

export class User extends Component {
  render() {
    const { search, results } = this.props;

    return (
      <div>
        <Add {...this.props} />
        <Results {...this.props} />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  member: memberSelector
, results: resultsSelector
, users: usersSelector
, authorized: authorizeSelector(Manage, primarySelector)
});

export default connect(mapStateToProps, { search, add, invite, remove })(User);
