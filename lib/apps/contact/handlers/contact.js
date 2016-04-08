import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { send } from '../ducks/contact';
import ContactForm from '../components/contact';

export class Contact extends Component {
  render() {
    const { send } = this.props;
    
    return (
      <div>
        <ContactForm {...this.props} onSubmit={send}/>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  contact: state => state.contact.contact
});

export default connect(mapStateToProps, { send })(Contact);

