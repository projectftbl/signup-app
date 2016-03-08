import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { info } from 'frieze';
import { verify } from '../ducks/session';

export class Verify extends Component {
  componentDidMount() {
    const { verify, code } = this.props;

    verify(code);
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

const mapStateToProps = (state, props) => {
  return {
    session: state.session
  , code: props.params.code
  };  
}

export default connect(mapStateToProps, { verify, info, push })(Verify);
