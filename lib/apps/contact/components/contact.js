import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input, TextArea, Button, Message } from '@ftbl/form';
import validate from '../validate/contact';
import { User, Email, Question } from '@ftbl/icons';
import Heading from '../../../components/heading';

export class Contact extends Component {
  render() {
    const { fields, contact: { sending, error }, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <Heading>Contact Us</Heading>
        <Input label='Name' field={fields.name} focus={true}  Icon={User}/>
        <Input label='Email Address' type='email' field={fields.email} Icon={Email} />
        <TextArea label='Message' field={fields.message} Icon={Question}/>

        <Button label={sending ? 'Sending...' : 'Send'}
                disabled={sending}
                onClick={handleSubmit} />
        <Message>{error}</Message>
      </form>
    );
  }
};

export default reduxForm({
  form: 'contact'
, fields: [ 'name', 'email', 'message' ]
, validate
}
, state => ({ initialValues: state.session.user }))(Contact);
