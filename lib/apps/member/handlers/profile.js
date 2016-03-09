import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { info, warning } from 'frieze';
import { pushState } from 'redux-react-router';
import { reloadSession } from '../../sessions/ducks/session';
import { update } from '../ducks/member';
import Profile from '../views/profile';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(previous) {
    const { details, reset, info, reloadSession } = this.props;

    if (details.changed && !previous.details.changed) {
      reloadSession({ forceRefresh: true });
      reset('profile');
      info('Your personal details have been changed.');
    }
  }

  handleSubmit(data) {
    const { session, update } = this.props;

    update(session.user, data);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  member: state => state.member.member
, session: state => state.session
});

const mapDispatchToProps = dispatch => {
  return { ...bindActionCreators({ update, reset, info, warning, pushState, reloadSession }, dispatch), dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);

