import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { info, warning } from 'frieze';
import { register } from '../ducks/register';
import RegisterForm from '../views/register';

export class Register extends Component {
  render() {
    const { register } = this.props;

    const styles = {
      link: {
        textDecoration: 'none'
      , paddingTop: 20
      , display: 'block'
      , color: '#31c0b5'
      , fontSize: 17
      , fontWeight: 400
      }
    };

    return (
      <div>
        <RegisterForm {...this.props} onSubmit={register} />
        <Link style={styles.link} to='/signon' data-test='signon-link'>Return to sign on</Link>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({

});

export default connect(mapStateToProps, { register, info, warning })(Register);

