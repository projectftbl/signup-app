import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Flash, close } from 'frieze';
import Header from '../components/header';
import { signOut } from '../apps/sessions/ducks/session';

export class Main extends Component {

  static propTypes = {
    flash: PropTypes.object.isRequired
  } 

  render() {
    const { children, session, signOut, flash, close } = this.props;

    return (
      <div>
        <Flash flash={flash} onClose={close}/>

        <Header session={session} signOut={signOut} />

        <div style={{padding: 10}}>{children}</div>
      </div>
    );
  }
}

export default connect(state => ({ session: state.session, flash: state.flash }), { signOut, close })(Main);
