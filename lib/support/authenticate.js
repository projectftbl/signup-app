import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import hoistStatics from 'hoist-non-react-statics';

const defaults = {
  signOnPath: '/signon'
, passwordPath: '/user/password'
, wrapperDisplayName: 'Authenticate'
, allowRedirect: false
};

export default function(options) {
  const { 
    sessionSelector
  , passwordSelector
  , signOnPath
  , passwordPath
  , wrapperDisplayName
  , allowRedirect
  , redirectAction
  } = { ...defaults, ...options };

  const ensure = (location, selector, redirect, path) => {
    const query = allowRedirect === true
      ? { redirect: `${location.pathname}${location.search}` }
      : {};

    if (location.pathname === path) return;

    if (!selector) {
      redirect({ pathname: path, query });
      return true;
    }
  };

  const ensureAuthenticated = ({ location, session }, redirect) => {
    return ensure(location, session, redirect, signOnPath);
  };

  const ensureShouldChangePassword = ({ location, shouldChangePassword }, redirect) => {
    return ensure(location, shouldChangePassword, redirect, passwordPath);
  };

  var component = function(DecoratedComponent) {
    const displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component'

    class AuthenticationWrapper extends Component {

      static displayName = `${wrapperDisplayName}(${displayName})`;

      static propTypes = {
        location: PropTypes.shape({
          pathname: PropTypes.string.isRequired
        , search: PropTypes.string.isRequired
        }).isRequired
      , redirect: PropTypes.func
      , session: PropTypes.object
      , shouldChangePassword: PropTypes.boolean
      };

      static contextTypes = {
        router: React.PropTypes.object
      };

      componentWillMount() {
        const redirecting = ensureAuthenticated(this.props, this.getRedirect(this.props));
        if (!redirecting) ensureShouldChangePassword(this.props, this.getRedirect(this.props));
      }

      componentWillReceiveProps(nextProps) {
        const redirecting = ensureAuthenticated(nextProps, this.getRedirect(nextProps));
        if (!redirecting) ensureShouldChangePassword(nextProps, this.getRedirect(nextProps));
      }

      getRedirect = props => {
        if (props.redirect) return props.redirect;

        if (!this.context.router.replace) {
          throw new Error(`You must provide a router context (or use React-Router 2.x) if not passing a redirectAction to ${wrapperDisplayName}`)
        }
        
        return this.context.router.replace;
      };

      render() {
        const { session, ...props } = this.props

        if (!session) return <div/>;

        return <DecoratedComponent session={session} {...props} />;
      }
    }

    const mapDispatchToProps = dispatch => {
      if (redirectAction != null) return {};
      
      return { redirect: (options) => dispatch(redirectAction(options)) };
    };

    const mapStateToProps = (state, props) => {
      return { 
        session: sessionSelector(state)
      , shouldChangePassword: passwordSelector(state)
      }; 
    };

    return hoistStatics(connect(mapStateToProps, mapDispatchToProps)(AuthenticationWrapper), DecoratedComponent)
  }

  component.onEnter = (store, nextState, replace) => {
    const session = sessionSelector(store.getState())
        , shouldChangePassword = passwordSelector(store.getState());

    const redirecting = ensureAuthenticated({ location: nextState.location, session }, replace);
    if (!redirecting) ensureShouldChangePassword({ location: nextState.location, shouldChangePassword }, replace);
  };

  return component;
}