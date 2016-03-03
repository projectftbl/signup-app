import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { info } from 'frieze';
import { signOut } from '../ducks/session';

export class SignOut extends Component {
  componentDidMount() {
    const { session, signOut, info, pushState } = this.props;

    if (session.user) signOut(session.user.id);
    
    push('/');
    info('You have been signed off');
  }

  render() {
    return <span/>;
  }
};

export default connect(state => ({ session: state.session }), { signOut, info, push })(SignOut);
