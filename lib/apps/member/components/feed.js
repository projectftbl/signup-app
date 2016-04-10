import React from 'react';
import Radium from 'radium';
import { reduxForm, reset } from 'redux-form';
import { local } from 'redux-react-local';
import { Rss } from '@ftbl/icons';
import { Input, Button } from '@ftbl/form';

const options = { form: 'feed', fields: [ 'link' ] };

const Form = reduxForm(options)(({ display, fields, handleSubmit }) => {
  const styles = {
    base: {
      position: 'absolute'
    , top: 30
    , left: -10
    , width: 500
    , padding: '10px 10px 0 10px'
    , background: '#fff'
    , display: display ? 'inline' : 'none'
    }
  };

  return (
    <span style={styles.base}>
      <form onSubmit={handleSubmit}>
        <Input label='Enter Feed URL' field={fields.link} focus={true} />
        <span style={{position:'absolute', right:12}}>
          <Button label='Save' onClick={handleSubmit} 
            style={{padding:'6px 10px', borderRadius:0}}/>
        </span>
      </form>
    </span>
  );
});

export default local({
  ident: 'feed'
, initial: false
, reducer(state, { me }) { return me ? !state : state }
})(({ colour, onConnect, state, dispatch, $ }) => {
  const styles = {
    base: {
      position: 'relative'
    , paddingTop: 2
    , paddingRight: 10
    , cursor: 'pointer'
    }
  };

  const onSubmit = (props) => {
    onConnect(props);
    dispatch($({ type: 'toggle' }));
    dispatch(reset('feed'));
  };

  return (
    <span style={styles.base}>
      <a onClick={() => dispatch($({ type: 'toggle' }))}>
        <Rss colour={colour} size={32} />
      </a>
      <Form onSubmit={onSubmit} display={state} />
    </span>
  );
});

