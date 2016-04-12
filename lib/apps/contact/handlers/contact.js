import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { send } from '../ducks/contact';
import { Welcome } from '../../../components';
import ContactForm from '../components/contact';

export class Contact extends Component {
  render() {
    const { send } = this.props;
    
    return (
      <Welcome>
        <ContactForm {...this.props} onSubmit={send}/>
      </Welcome>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  contact: state => state.contact.contact
});

export default connect(mapStateToProps, { send })(Contact);

