import React, { Component, PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux';
import { Flash, close } from 'frieze';
import { components } from '@ftbl/user-web';
import { signOut, resend } from '@ftbl/session-web';
import { memberSelector, accountsSelector } from '@ftbl/member-web';
import { Header, Footer, Navigation, Connect } from '../components';

const Email = components.EmailNag
    , Password = components.PasswordNag;

@Radium
export class Main extends Component {

  static propTypes = {
    flash: PropTypes.object.isRequired
  } 

  render() {
    const { children, session, member, accounts, signOut, flash, close, resend } = this.props;

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
          <Password condition={session.user && session.user.shouldChangePassword} />
          <Connect condition={accounts.isFetched && accounts.data.length === 0} />

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
, accounts: accountsSelector(state)
, flash: state.flash 
}), { signOut, close, resend })(Main);
