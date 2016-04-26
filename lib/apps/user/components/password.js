import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Form, Input, Button, Message } from '@ftbl/form';
import validate from '../validate/password';
import Navigation from './navigation';

export class Password extends Component {
  render() {
    const { fields, password: { changing, error }, handleSubmit } = this.props;
    
    return (
      <Form onSubmit={handleSubmit}>
        <Navigation />
        <Input label='New Password' type='password' field={fields.password} focus={true} />
        <Input label='Confirm Password' type='password' field={fields.confirm} />

        <Button label={changing ? 'Changing...' : 'Change'}
                disabled={changing}
                onClick={handleSubmit} />
        <Message>{error}</Message>
      </Form>
    );
  }
};

export default reduxForm({
  form: 'password'
, fields: [ 'password', 'confirm' ]
, validate
})(Password);
