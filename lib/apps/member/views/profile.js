import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input, Button, Message } from 'ferox';
import validate from '../validate/profile';
import { Question } from 'ickle';
import Heading from '../../../components/heading';

export class Profile extends Component {
  render() {
    const { fields, details: { changing, error }, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <Heading>Edit Profile</Heading>
        <Input label='Name' field={fields.name} focus={true} />
        <Input label='Email Address' type='email' field={fields.email} />

        <Button label={changing ? 'Saving...' : 'Save'}
                disabled={changing}
                onClick={handleSubmit} />
        <Message>{error}</Message>
      </form>
    );
  }
};

export default reduxForm({
  form: 'profile'
, fields: [ 'name', 'email' ]
, validate
}
, state => ({ initialValues: state.session.user }))(Profile);
