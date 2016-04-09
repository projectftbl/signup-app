import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import validate from '../validate/user';
import { Input, Select, Button, Message } from '@ftbl/form';
import { Email, Question, User, Location, Menu } from '@ftbl/icons';
import Heading from '../../../components/heading';

export class Register extends Component {

  render() {
    const { fields, handleSubmit } = this.props;

    const data = [
      { id: 'player', description: 'Player' }
    , { id: 'team', description: 'Team' }
    , { id: 'media', description: 'Media' }
    ];
    
    return (
      <form  onSubmit={handleSubmit} data-test='register-form'>
        <Heading>Register with FTBL</Heading>

        <Input label='Email' field={fields.email} Icon={Email} focus={true} />
        <Input label='Name' field={fields.name} Icon={User} />
        <Input label='Password' field={fields.password} Icon={Question} />

        <Input label='Member Name' field={fields.member} Icon={Location} />
        <Select label='Type' field={fields.type} Icon={Menu} data={data}/>

        <Button label='Register' onClick={handleSubmit} name='register' />
      </form>
    );
  }
}

export default reduxForm({ 
  form: 'register'
, fields: [ 'name', 'email', 'password', 'member', 'type' ]
, validate })(Register);