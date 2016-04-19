import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import hoistStatics from 'hoist-non-react-statics';
import Authorizer from '@ftbl/authorize';

const defaults = {
  signOnPath: '/signon'
, deniedPath: '/denied'
, wrapperDisplayName: 'Authenticate'
, allowRedirect: true
};

export default function(options) {
  const { 
    sessionSelector
  , signOnPath
  , deniedPath
  , wrapperDisplayName
  , allowRedirect
  , redirectAction
  } = { ...defaults, ...options };

  const ensure = ({ location, session }, claim, redirect) => {
    const query = allowRedirect === true
      ? { redirect: `${location.pathname}${location.search}` }
      : {};

    if (location.pathname === signOnPath) return;

    if (!session) redirect({ pathname: signOnPath, query });

    if (claim && new Authorizer(Authorizer.fromUser(session)).can(claim) === false) {
      redirect({ pathname: deniedPath });
    }
  };

  return function(claim) { 

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
        };

        static contextTypes = {
          router: React.PropTypes.object
        };

        componentWillMount() {
          ensure(this.props, claim, this.getRedirect(this.props));
        }

        componentWillReceiveProps(nextProps) {
          ensure(nextProps, claim, this.getRedirect(nextProps));
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
        return { session: sessionSelector(state) }; 
      };

      return hoistStatics(connect(mapStateToProps, mapDispatchToProps)(AuthenticationWrapper), DecoratedComponent)
    }

    component.onEnter = (store, nextState, replace) => {
      const session = sessionSelector(store.getState());

      ensure({ location: nextState.location, session }, claim, replace);
    };

    return component;
  }
}