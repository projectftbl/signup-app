import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input, Button, Message } from 'ferox';
import validate from '../validate/password';
import { Question } from 'ickle';
import Heading from '../../../components/heading';

export class Password extends Component {
  render() {
    const { fields, password: { changing, error }, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <Heading>Change your Password</Heading>
        <Input label='New Password' type='password' field={fields.password} focus={true} />
        <Input label='Confirm Password' type='password' field={fields.confirm} />

        <Button label={changing ? 'Changing...' : 'Change'}
                disabled={changing}
                onClick={handleSubmit} />
        <Message>{error}</Message>
      </form>
    );
  }
};

export default reduxForm({
  form: 'password'
, fields: [ 'password', 'confirm' ]
, validate
})(Password);
