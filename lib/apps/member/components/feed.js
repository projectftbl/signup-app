import React from 'react';
import Radium from 'radium';
import Modal from 'react-modal';
import { reduxForm, reset } from 'redux-form';
import { local } from 'redux-react-local';
import { Rss } from '@ftbl/icons';
import Icon, { Icons } from './icon';
import { Input, Button } from '@ftbl/form';
import { Heading } from '../../../components';

const options = { form: 'feed', fields: [ 'link' ] };

const Form = reduxForm(options)(({ display, type, title, fields, handleSubmit, onClosed }) => {
  const styles = {
    content: {
      top: '50%'
    , left: '50%'
    , right: 'auto'
    , bottom: 'auto'
    , marginRight: '-50%'
    , transform: 'translate(-50%, -50%)'    
    , padding: '10px 20px 20px 20px'
    , borderRadius: 0
    }
  };

  return (
    <Modal style={styles} isOpen={display} closeTimeoutMS={150} shouldCloseOnOverlayClick={true} onRequestClose={onClosed}>
      <form onSubmit={handleSubmit}>
        <Heading>{title}</Heading>
        <Input label='URL' field={fields.link} focus={true} Icon={Icons[type]} />
        <Button label='Connect' onClick={handleSubmit} />
        <Button label='cancel' kind='link' onClick={onClosed} />
      </form>
    </Modal>
  );
});

export default local({
  ident: 'feed'
, initial: false
, reducer(state, { me }) { return me ? !state : state }
})(({ colour, onConnect, type, title, state, dispatch, $ }) => {
  const styles = {
    base: {
      position: 'relative'
    , paddingTop: 2
    , cursor: 'pointer'
    }
  };

  const onSubmit = (props) => {
    onConnect(props);
    dispatch($({ type: 'toggle' }));
    dispatch(reset('feed'));
  };

  const toggle = e => {
    if (e && e.preventDefault) e.preventDefault();
    dispatch($({ type: 'toggle' }));
  };

  return (
    <span style={styles.base}>
      <Icon colour={colour} network={type} onConnect={toggle} />
      <Form onSubmit={onSubmit} onClosed={toggle} type={type} title={title} display={state} />
    </span>
  );
});

