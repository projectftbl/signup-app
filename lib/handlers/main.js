import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { Flash, close } from 'frieze';
import { Header, Footer, Sidebar, Navigation, Email } from '../components';
import { signOut } from '../apps/sessions/ducks/session';
import { resend } from '../apps/sessions/ducks/forgotten';
import { toggle } from '../ducks/sidebar';

@Radium
export class Main extends Component {

  static propTypes = {
    flash: PropTypes.object.isRequired
  } 

  render() {
    const { children, session, sidebar, signOut, flash, close, toggle, resend } = this.props;

    const styles = {
      base: {
        width: '100%'
      , paddingBottom: 40
      , paddingLeft: 20
      , paddingRight: 20
      , overflow: 'auto'
      }
    };

    return (
      <span>
        <Flash flash={flash} onClose={close}/>

        <Sidebar active={sidebar.active} onClick={toggle}>
          <Navigation onNavigate={toggle} />
        </Sidebar>

        <div style={{ width: '100%', minHeight: '100%' }}>
          <Header session={session} onSignOut={signOut} onMenuClick={toggle} />
          <Email condition={session.user && session.user.verificationCode} 
                 onResend={() => resend(session.user.email)} />

          <div style={styles.base}>
            {children}
          </div>
        </div>

        <Footer/>
      </span>
    );
  }
}

export default connect(state => ({ 
  session: state.session
, flash: state.flash
, sidebar: state.sidebar 
}), { signOut, close, toggle, resend })(Main);
