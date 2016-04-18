import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { open, close, toggle } from '../ducks/faq';
import { Heading } from '../../../components';
import Faqs from '../components/faqs';

export class Faq extends Component {
  render() {
    const styles={
      base: {
        margin: '0 auto'
      , width: '60%'
      , minWidth: 400
      , paddingBottom: 20
      }
    };

    return (
      <div style={styles.base}>
        <Heading>Frequently Asked Questions</Heading>
        <Faqs {...this.props} />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  faq: state => state.faq.faq
});

export default connect(mapStateToProps, { open, close, toggle })(Faq);

