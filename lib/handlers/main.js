import React, { Component, PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux';
import { Flash, close } from 'frieze';
import { Header, Footer, Navigation, Email } from '../components';
import { signOut } from '../apps/sessions/ducks/session';
import { resend } from '../apps/sessions/ducks/forgotten';
import { toggle } from '../ducks/menu';

@Radium
export class Main extends Component {

  static propTypes = {
    flash: PropTypes.object.isRequired
  } 

  render() {
    const { children, session, menu, signOut, flash, close, toggle, resend } = this.props;

    const styles = {
      base: {
        width: '100%'
      , overflow: 'auto'
      , paddingTop: 10
      , paddingBottom: 40
      , paddingLeft: 20
      , paddingRight: 20
      , '@media (max-width: 639px)': {
          paddingTop: 0
        }
      }
    };

    return (
      <span>
        <Flash flash={flash} onClose={close}/>
        
        <StyleRoot style={{ width: '100%', minHeight: '100%' }}>
          <Header session={session} onSignOut={signOut} 
                  toggle={toggle} menu={menu} />
          
          <Email condition={session.user && session.user.verificationCode} 
                 onResend={() => resend(session.user.email)} />

          <div style={styles.base}>
            {children}
          </div>
        </StyleRoot>

        <Footer/>
      </span>
    );
  }
}

export default connect(state => ({ 
  session: state.session
, flash: state.flash
, menu: state.menu 
}), { signOut, close, toggle, resend })(Main);
