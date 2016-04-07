import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { Flash, close } from 'frieze';
import { Header, Footer, Sidebar, Navigation, Email } from '../components';
import { signOut } from '../apps/sessions/ducks/session';
import { toggle } from '../ducks/sidebar';

@Radium
export class Main extends Component {

  static propTypes = {
    flash: PropTypes.object.isRequired
  } 

  render() {
    const { children, session, sidebar, signOut, flash, close, toggle } = this.props;

    const styles = {
      base: {
        position: 'absolute'
      , width: '100%'
      , transform: 'translate3D(0, 0, 0)'
      , transition: 'transform 250ms ease-in-out'
      }
    , active: {
        transform: 'translate3D(300px, 0, 0)'
      }
    };

    return (
      <div>
        <Flash flash={flash} onClose={close}/>

        <Email condition={session.user && session.user.verificationCode} />

        <Sidebar active={sidebar.active} onClick={toggle}>
          <Navigation onNavigate={toggle} />
        </Sidebar>

        <div style={[ styles.base, sidebar.active && styles.active ]}>
          <Header session={session} onSignOut={signOut} onMenuClick={toggle} />

          <div style={{padding: 20, position: 'relative'}}>{children}</div>

        </div>

        <Footer/>
      </div>
    );
  }
}

export default connect(state => ({ 
  session: state.session
, flash: state.flash
, sidebar: state.sidebar 
}), { signOut, close, toggle })(Main);
