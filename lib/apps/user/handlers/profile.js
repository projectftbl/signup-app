import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { save } from '../ducks/user';
import ProfileForm from '../components/profile';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const { session, save } = this.props;
    save(session.user, data);
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
  session: state => state.session
, user: state => state.user.user
});

export default connect(mapStateToProps, { save })(Profile);

