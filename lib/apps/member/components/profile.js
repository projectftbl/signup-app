import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input, Select, Button, TextArea, Message } from '@ftbl/form';
import { memberSelector } from '../ducks/members';
import { Question } from '@ftbl/icons';
import validate from '../validate/profile';
import Navigation from './navigation';
import data from '../data/types';

export class Profile extends Component {
  render() {
    const { fields, members: { changing, error }, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <Navigation />
        <Input label='Member Name' field={fields.name} focus={true} />
        <Select label='Member Type' field={fields.type} data={data} />
        <TextArea label='Bio' field={fields.bio} minRows={6} />

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
, fields: [ 'name', 'type', 'bio' ]
, validate
}
, state => ({ initialValues: memberSelector(state) }))(Profile);
