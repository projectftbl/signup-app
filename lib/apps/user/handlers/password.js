import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changePassword } from '../ducks/password';
import PasswordForm from '../components/password';

export class Password extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const { session, changePassword } = this.props;

    changePassword(session.user, data);
  }

  render() {
    return (
      <div>
        <PasswordForm {...this.props} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  password: state => state.member.password
, session: state => state.session
});

export default connect(mapStateToProps, { changePassword })(Password);

