import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Navigation from '../components/navigation';

export class Access extends Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps, { })(Access);
