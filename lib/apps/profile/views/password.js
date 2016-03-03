import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input, Button, Message } from 'ferox';
import validate from '../validate/password';
import { Question } from 'ickle';
import Heading from '../../../components/heading';

@reduxForm({
  form: 'password'
, fields: [ 'password', 'confirm' ]
, validate: validate
})
export default class Password extends Component {
  render() {
    const { fields, password: { changing, error }, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <Heading>Change your Password</Heading>
        <Input label='New Password' type='password' field={fields.password} focus={true} />
        <Input label='Confirm Password' type='password' field={fields.confirm} />

        <Button label={changing ? 'Changing...' : 'Change'}
                disabled={changing} colour='#31c0b5'
                onClick={handleSubmit} />
        <Message>{error}</Message>
      </form>
    );
  }
}