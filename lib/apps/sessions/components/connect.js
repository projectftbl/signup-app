import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { validate } from '../validate/user';
import { Input, Button } from 'ferox';
import Heading from '../../../components/heading';

export class Connect extends Component {

  render() {
    const { fields, connectToFacebook, connectToTwitter, handleSubmit } = this.props;
    
    return (
      <form style={{width: '75%'}} onSubmit={handleSubmit} data-test='connect-form'>
        <Heading>Connect Social Accounts</Heading>

        <Button label='Facebook' onClick={connectToFacebook} />
        <Button label='Twitter' onClick={connectToTwitter} />

        <Button label='Finish' onClick={handleSubmit} name='finish' />
      </form>
    );
  }
}

export default reduxForm({ form: 'connect', fields: [  ] })(Connect);