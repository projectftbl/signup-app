import React, { Component, PropTypes } from 'react';
import { Link }  from 'react-router';
import { reduxForm }  from 'redux-form';
import { Form, Input, Select, Check, Button, Message } from '@ftbl/form';
import { Email, Question, User, Location, Menu, Pdf } from '@ftbl/icons';
import { Heading, Rule } from '../../../components';
import Content from '../../content/components/content';
import data from '../../member/data/types';
import validate from '../validate/user';

export class Signup extends Component {
  render() {
    const { fields, handleSubmit, signup: { error, signingUp }} = this.props;
  
    const smla = 
      <span>
        I agree to the 
        <a style={{color:'inherit',outline:'none',fontWeight:400,textDecoration:'underline', padding: '0 4px'}} 
           href='/docs/sma-1.02.pdf' target='_blank'>
           SMA
        </a> 
        <Pdf size={16} style={{marginTop:-3}} />
      </span>;

    return (
      <Form onSubmit={handleSubmit} name='signup'>
        <Heading>Sign Up</Heading>

        <Input label='Your Name' field={fields.name} Icon={User} focus={true} />
        <Input label='Your Email' field={fields.email} Icon={Email} type='email' />
        <Input label='Password' field={fields.password} Icon={Question} type='password' />

        <Rule colour='#ddd' />

        <Input label='Member Name' field={fields.member} Icon={Location} />
        <Select label='Member Type' field={fields.type} Icon={Menu} data={data} />

        <Check label={smla} field={fields.smla} />
        <Check label='I am not a robot' field={fields.robot} />

        <Button label={signingUp ? 'Signing Up...' : 'Sign Up'}
                disabled={signingUp}
                onClick={handleSubmit} name='signup' />
        <Message>{error}</Message>
      </Form>
    );
  }
};

export default reduxForm({ 
  form: 'signup'
, fields: [ 'name', 'email', 'password', 'member', 'type', 'smla', 'robot' ]
, validate 
})(Signup);
