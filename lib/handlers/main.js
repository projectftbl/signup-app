import React, { Component, PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux';
import { Flash, close } from 'frieze';
import { Header, Footer, Navigation, Email } from '../components';
import { signOut } from '../apps/sessions/ducks/session';
import { resend } from '../apps/sessions/ducks/forgotten';
import { memberSelector } from '../apps/member/ducks/members';

@Radium
export class Main extends Component {

  static propTypes = {
    flash: PropTypes.object.isRequired
  } 

  render() {
    const { children, session, member, signOut, flash, close, resend } = this.props;

    const styles = {
      base: {
        width: '100%'
      , overflow: 'auto'
      , paddingTop: 20
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
          <Header session={session} member={member} onSignOut={signOut} />
          
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
, member: memberSelector(state)
, flash: state.flash 
}), { signOut, close, resend })(Main);
