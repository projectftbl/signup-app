import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { info } from 'frieze';
import { verify } from '../ducks/session';

export class Verify extends Component {
  componentDidMount() {
    const { verify, routing } = this.props;

    verify(routing.params.code);
  }

  componentDidUpdate(previous) {
    const { session, info, push } = this.props;

    if (session.user && !previous.session.user) {
      info('Your email address has been successfully verified.');
      push('/profile/account');
    } else {
      push('/signon');
    }
  }

  render() {
    return <span/>;
  }
};

export default connect(state => ({ session: state.session, routing: state.routing }), { verify, info, push })(Verify);
