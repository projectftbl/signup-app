import React, { Component, PropTypes } from 'react';
import { Link }  from 'react-router';
import { local } from 'redux-react-local';
import Modal from 'react-modal';
import { reduxForm }  from 'redux-form';
import validate from '../validate/user';
import { Input, Select, Check, Button, Message } from '@ftbl/form';
import { Email, Question, User, Location, Menu } from '@ftbl/icons';
import { Heading, Rule } from '../../../components';
import Content from '../../content/components/content';
import data from '../../member/data/types';

const options = { form: 'feed', fields: [ 'link' ] };

const Smla = ({ display, onClosed }) => {
  const styles = {
    content: {
      position: 'fixed'
    , top: 20
    , left: 20
    , right: 20
    , bottom: 60
    , padding: '10px 20px 20px 20px'
    , borderRadius: 0
    }
  };

  return (
    <Modal style={styles} isOpen={display} closeTimeoutMS={150} shouldCloseOnOverlayClick={true} onRequestClose={onClosed}>
      <Content page='license' />
    </Modal>
  );
};

export class Register extends Component {
  render() {
    const { fields, handleSubmit, state, dispatch, $, signup: { error, registering }} = this.props;

    const toggle = e => {
      if (e) e.preventDefault();
      dispatch($({ type: 'toggle' }));
    };
  
    const smla = <span>I agree to the <a style={{color:'inherit',outline:'none',fontWeight:400,textDecoration:'underline'}} onClick={toggle}>SMLA</a></span>

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

        <Smla onClosed={toggle} display={state} />
      </form>
    );
  }
};

export default local({
  ident: 'register'
, initial: false
, reducer(state, { me }) { return me ? !state : state }
})
(reduxForm({ 
  form: 'register'
, fields: [ 'name', 'email', 'password', 'member', 'type', 'smla', 'robot' ]
, validate })
(Register))
