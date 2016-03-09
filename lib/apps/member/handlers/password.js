import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { pushState } from 'redux-react-router';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import { info, warning } from 'frieze';
import { reloadSession } from '../../sessions/ducks/session';
import { changePassword } from '../ducks/password';
import PasswordForm from '../views/password';

export class Password extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { session, warning } = this.props;

    if (session.user && session.user.shouldChangePassword) {
      warning('Please change your password before continuing.');
    }
  }

  componentDidUpdate(previous) {
    const { password, changePassword, reset, info, pushState, reloadSession } = this.props;

    if (password.changed && !previous.password.changed) {
      reloadSession({ forceRefresh: true });
      reset('password');
      setTimeout(() => {
        info('Your password has been successfully changed.');
        push('/member');
      }, 500);
    }
  }

  handleSubmit(data) {
    const { session, changePassword } = this.props;

    changePassword(session.user, data);
  }

  render() {
    return (
      <div>
        <PasswordForm {...this.props} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  password: state => state.profile.password
, session: state => state.session
});

const mapDispatchToProps = dispatch => {
  return { ...bindActionCreators({ changePassword, reset, info, warning, pushState, reloadSession }, dispatch), dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);

