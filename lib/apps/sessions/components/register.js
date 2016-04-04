import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { validate } from '../validate/user';
import { Input, Button } from 'ferox';
import { Email, Question, User } from '@ftbl/icons';
import Heading from '../../../components/heading';

export class Register extends Component {

  render() {
    const { fields, handleSubmit } = this.props;
    
    return (
      <form style={{width: '75%'}} onSubmit={handleSubmit} data-test='register-form'>
        <Heading>Register with FTBL</Heading>

        <Input label='Email' field={fields.email} Icon={Email} focus={true} />
        <Input label='Name' field={fields.name} Icon={User} />
        <Input label='Password' field={fields.password} Icon={Question} />

        <Button label='Register' onClick={handleSubmit} name='register' />
      </form>
    );
  }
}

export default reduxForm({ form: 'register', fields: [ 'name', 'email', 'password' ], validate })(Register);