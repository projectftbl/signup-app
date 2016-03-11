import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { update } from '../ducks/member';
import ProfileForm from '../components/profile';

export class Profile extends Component {

  render() {
    const { update } = this.props;

    return (
      <div>
        <ProfileForm {...this.props} onSubmit={update}/>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  member: state => state.member.member
, session: state => state.session
});

export default connect(mapStateToProps, { update })(Profile);

