import React, { Component, PropTypes } from 'react';
import { replaceState } from 'redux-react-router';
import { connect } from 'react-redux';
import { signOff } from '../../sessions/ducks/session';

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  requireAuthentication(previous) {
    const { session, replaceState } = this.props

    if (session.user == null && !session.isSigningOn) return replaceState(null, '/signon');
  }

  shouldChangePassword(previous) {
    const { session, router: { location }, password, replaceState } = this.props
        , { user } = session;

    if (session.isSigningOn || password.changing || !user) return;

    if ((location.pathname !== previous.router.location.pathname && user.shouldChangePassword) ||
        (user.shouldChangePassword && previous.session.user == null)) {
      replaceState(null, '/profile/password');
    }
  }

  componentDidMount() {
    this.requireAuthentication();
  }

  componentDidUpdate(previous) {
    this.requireAuthentication(previous);
    this.shouldChangePassword(previous);
  }

  handleSignOut() {
    const { signOff, session } = this.props;

    signOff(session.user.id);
  }

  render() {
    const { children, session } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    session: state.session
  , router: state.router
  , password: state.profile.password
  } 
};

export default connect(mapStateToProps, { signOff, replaceState })(Profile);

