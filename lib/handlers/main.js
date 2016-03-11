import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Flash, close } from 'frieze';
import Header from '../components/header';

export class Main extends Component {

  static propTypes = {
    flash: PropTypes.object.isRequired
  } 

  render() {
    const { children, session, flash, close } = this.props;

    return (
      <div>
        <Flash flash={flash} onClose={close}/>

        <Header session={session} />

        <div style={{padding: 10}}>{children}</div>

      </div>
    );
  }
}

export default connect(state => ({ session: state.session, flash: state.flash }), { close })(Main);
