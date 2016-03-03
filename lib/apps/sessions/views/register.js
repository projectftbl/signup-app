import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { validate } from '../validate/user';
import { Input, Button } from 'ferox';
import { Email, Question } from 'ickle';
import Heading from '../../../components/heading';

export class Register extends Component {

  render() {
    const { fields, handleSubmit } = this.props;
    
    return (
      <form style={{width: '75%'}} onSubmit={handleSubmit} data-test='register-form'>
        <Heading>Register with FTBL</Heading>

        <Input label='Email' field={fields.email} Icon={Email} focus={true} />

        <Button label='Register' onClick={handleSubmit} name='register' />
      </form>
    );
  }
}

export default reduxForm({ form: 'register', fields: [ 'email' ], validate })(Register);