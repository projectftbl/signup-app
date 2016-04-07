import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { open, close, toggle } from '../ducks/faq';
import Faqs from '../components/faqs';

export class Faq extends Component {
  render() {
    return (
      <Faqs {...this.props} />
    );
  }
};

const mapStateToProps = createStructuredSelector({
  faq: state => state.faq.faq
});

export default connect(mapStateToProps, { open, close, toggle })(Faq);

