import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-react-router';
import { info } from 'frieze';
import { verify } from '../ducks/session';

export class Verify extends Component {
  componentDidMount() {
    const { verify, router } = this.props;

    verify(router.params.code);
  }

  componentDidUpdate(previous) {
    const { session, info, pushState } = this.props;

    if (session.user && !previous.session.user) {
      info('Your email address has been successfully verified.');
      pushState(null, '/profile/account');
    } else {
      pushState(null, '/signon');
    }
  }

  render() {
    return <span/>;
  }
};

export default connect(state => ({ session: state.session, router: state.router }), { verify, info, pushState })(Verify);
