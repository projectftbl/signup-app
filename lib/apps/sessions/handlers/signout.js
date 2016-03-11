import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../ducks/session';

export class SignOut extends Component {
  componentDidMount() {
    const { session, signOut } = this.props;

    if (session.user) signOut(session.user.id);
  }

  render() {
    return <span/>;
  }
};

export default connect(state => ({ session: state.session }), { signOut })(SignOut);
