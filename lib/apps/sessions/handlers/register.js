import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { register } from '../ducks/register';
import RegisterForm from '../components/register';

export class Register extends Component {
  render() {
    const { register } = this.props;

    return (
      <div>
        <RegisterForm {...this.props} onSubmit={register} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, { register })(Register);

