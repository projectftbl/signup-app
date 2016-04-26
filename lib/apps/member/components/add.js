import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Form, Input, Select, Button, TextArea, Message } from '@ftbl/form';
import { memberSelector } from '../ducks/members';
import { Search, Spinner } from '@ftbl/icons';
import data from '../data/types';

export class Add extends Component {
  render() {
    const { fields, results: { fetching }, handleSubmit } = this.props;

    const colour = fields.q.active ? '#999' : '#ccc';

    const icon = fetching 
                 ? <Spinner rotate={true} colour={colour} /> 
                 : <Search colour={colour} />;
    
    return (
      <Form onSubmit={handleSubmit}>
        <p style={{color: '#666', margin: '-5px 0 10px 0', paddingTop: 5}}>
          Search for users and grant access
        </p>

        <Input label='Search Users' field={fields.q} focus={true} icon={icon} />
      </Form>
    );
  }
};

export default reduxForm({ form: 'users', fields: [ 'q' ] })(Add);
