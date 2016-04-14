import React, { Component, PropTypes } from 'react';
import { Link }  from 'react-router';
import { reduxForm }  from 'redux-form';
import validate from '../validate/user';
import { Input, Select, Check, Button, Message } from '@ftbl/form';
import { Email, Question, User, Location, Menu } from '@ftbl/icons';
import { Heading, Rule } from '../../../components';
import data from '../../member/data/types';

export class Register extends Component {
  render() {
    const { fields, handleSubmit, signup: { error, registering }} = this.props;
  
    const smla = <span>I agree to the <Link style={{color:'inherit',outline:'none',fontWeight:400}} to='/license'>SMLA</Link></span>

    return (
      <form onSubmit={handleSubmit} data-test='register-form'>
        <Heading>Sign Up</Heading>

        <Input label='Your Name' field={fields.name} Icon={User} focus={true} />
        <Input label='Your Email' field={fields.email} Icon={Email} type='email' />
        <Input label='Password' field={fields.password} Icon={Question} type='password' />

        <Rule colour='#eee' />

        <Input label='Member Name' field={fields.member} Icon={Location} />
        <Select label='Member Type' field={fields.type} Icon={Menu} data={data} />

        <Check label={smla} field={fields.smla} />
        <Check label='I am not a robot' field={fields.robot} />

        <Button label={registering ? 'Signing Up...' : 'Sign Up'}
                disabled={registering}
                onClick={handleSubmit} name='signup' />
        <Message>{error}</Message>
      </form>
    );
  }
}

export default reduxForm({ 
  form: 'register'
, fields: [ 'name', 'email', 'password', 'member', 'type', 'smla', 'robot' ]
, validate })(Register);