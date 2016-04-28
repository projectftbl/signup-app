import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Form, Input, Button, Message } from '@ftbl/form';
import validate from '../validate/user';
import Navigation from './navigation';

export class Profile extends Component {
  render() {
    const { fields, user: { updating, error }, handleSubmit } = this.props;
    
    return (
      <Form onSubmit={handleSubmit}>
        <Navigation />
        <Input label='Your Name' field={fields.name} focus={true} />
        <Input label='Your Email Address' type='email' field={fields.email} />

        <Button label={updating ? 'Saving...' : 'Save'}
                disabled={updating}
                onClick={handleSubmit} />
        <Message>{error}</Message>
      </Form>
    );
  }
};

export default reduxForm({
  form: 'user'
, fields: [ 'name', 'email' ]
, validate
}
, state => ({ initialValues: state.session.user }))(Profile);
