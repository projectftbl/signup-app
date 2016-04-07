import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { update } from '../ducks/members';
import ProfileForm from '../components/profile';

export class Connections extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const { member, update } = this.props;
    update(member.data.id, data);
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
  member: state => state.member.member
, session: state => state.session
});

export default connect(mapStateToProps, { update })(Connections);
