import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { update, memberSelector, membersSelector } from '../ducks/members';
import ProfileForm from '../components/profile';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const { member, update } = this.props;
    update(member, data);
  }

  render() {
    return (
      <div>
        <ProfileForm {...this.props} onSubmit={this.handleSubmit}/>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  member: memberSelector
, members: membersSelector
, session: state => state.session
});

export default connect(mapStateToProps, { update })(Profile);

