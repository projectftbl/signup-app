import React, { Component, PropTypes } from 'react';
import assign from 'lodash/object/assign';
import { reduxForm } from 'redux-form';
import { Form, Input, TextArea, Button, Message } from '@ftbl/form';
import { User, Email, Question } from '@ftbl/icons';
import { Heading } from '@ftbl/component';
import validate from '../validate/contact';

export class Contact extends Component {
  render() {
    const { fields, contact: { sending, error }, handleSubmit } = this.props;
    
    return (
      <Form onSubmit={handleSubmit}>
        <Heading>Contact Us</Heading>
        <Input label='Your Name' field={fields.name} focus={true}  Icon={User}/>
        <Input label='Email Address' type='email' field={fields.email} Icon={Email} />
        <TextArea label='Your Message' field={fields.text} Icon={Question} minRows={6}/>

        <Button label={sending ? 'Sending...' : 'Send'}
                disabled={sending}
                onClick={handleSubmit} />
        <Message>{error}</Message>
      </Form>
    );
  }
};

export default reduxForm({
  form: 'contact'
, fields: [ 'name', 'email', 'text', 'type' ]
, validate
}
, state => ({ initialValues: assign({}, state.session.user, { text: '' }) }))(Contact);
