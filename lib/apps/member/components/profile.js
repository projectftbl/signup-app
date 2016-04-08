import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input, Button, Message } from '@ftbl/form';
import validate from '../validate/profile';
import { Question } from '@ftbl/icons';
import Heading from '../../../components/heading';

export class Profile extends Component {
  render() {
    const { fields, members: { changing, error }, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <Heading>Edit Profile</Heading>
        <Input label='Name' field={fields.name} focus={true} />

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
, fields: [ 'name' ]
, validate
}
, state => ({ initialValues: state.member.member.data }))(Profile);
