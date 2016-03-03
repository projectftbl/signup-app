import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { close, Flash } from 'frieze';

export class Main extends Component {

  static propTypes = {
    flash: PropTypes.object.isRequired
  } 

  render() {
    const { children, flash, close } = this.props;

    return (
      <div>
        <Flash flash={flash} onClose={close}/>

        <div>{children}</div>

      </div>
    );
  }
}

export default connect(state => ({ flash: state.flash }), { close })(Main);
