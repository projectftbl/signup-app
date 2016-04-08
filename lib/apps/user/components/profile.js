import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input, Button, Message } from '@ftbl/form';
import validate from '../validate/user';
import { Question } from '@ftbl/icons';
import Heading from '../../../components/heading';

export class Profile extends Component {
  render() {
    const { fields, user: { updating, error }, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <Heading>Edit User</Heading>
        <Input label='Name' field={fields.name} focus={true} />
        <Input label='Email Address' type='email' field={fields.email} />

        <Button label={updating ? 'Saving...' : 'Save'}
                disabled={updating}
                onClick={handleSubmit} />
        <Message>{error}</Message>
      </form>
    );
  }
};

export default reduxForm({
  form: 'user'
, fields: [ 'name', 'email' ]
, validate
}
, state => ({ initialValues: state.session.user }))(Profile);
