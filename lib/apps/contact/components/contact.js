import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input, TextArea, Button, Message } from '@ftbl/form';
import { User, Email, Question } from '@ftbl/icons';
import validate from '../validate/contact';
import Heading from '../../../components/heading';

export class Contact extends Component {
  render() {
    const { fields, contact: { sending, error }, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <Heading>Contact Us</Heading>
        <Input label='Your Name' field={fields.name} focus={true}  Icon={User}/>
        <Input label='Email Address' type='email' field={fields.email} Icon={Email} />
        <TextArea label='Your Message' field={fields.text} Icon={Question} minRows={6}/>

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
, fields: [ 'name', 'email', 'text' ]
, validate
}
, state => ({ initialValues: state.session.user }))(Contact);
