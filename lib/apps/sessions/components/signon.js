import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { Input, Button, Message } from '@ftbl/form';
import { Email, Question } from '@ftbl/icons';
import validate from '../validate/signon';
import Heading from '../../../components/heading';

export class SignOn extends Component {

  render() {
    const { fields, message, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit} data-test='signon-form'>
        <Heading>Sign on to FTBL</Heading>

        <Input label='Email' field={fields.email} Icon={Email} focus={true} />
        <Input label='Password' type='password' field={fields.password} Icon={Question} />

        <Button label='Sign On' onClick={handleSubmit} name='signon' />
        <Message>{message}</Message>
      </form>
    );
  }
}

export default reduxForm({ form: 'signon', fields: [ 'email', 'password' ], validate })(SignOn);