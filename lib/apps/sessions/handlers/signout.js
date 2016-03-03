import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-react-router';
import { info } from 'frieze';
import { signOut } from '../ducks/session';

export class SignOut extends Component {
  componentDidMount() {
    const { session, signOut, info, pushState } = this.props;

    if (session.user) signOut(session.user.id);
    
    pushState(null, '/');
    info('You have been signed off');
  }

  render() {
    return <span/>;
  }
};

export default connect(state => ({ session: state.session }), { signOut, info, pushState })(SignOut);
