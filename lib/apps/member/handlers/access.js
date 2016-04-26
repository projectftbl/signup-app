import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Access as Menu } from '../components/navigation';

export class Access extends Component {
  render() {
    const { children } = this.props;
  
    return (
      <div style={{minHeight: 400}}>
        <Menu />

        {children}
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
});

export default connect(mapStateToProps)(Access);

