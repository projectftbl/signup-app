import React from 'react';
import Nag from './';

export default props => {
  const { onResend, condition } = props;

  const styles = {
    base: {
      padding: '12px 20px'
    }
  };

  return (
    <Nag condition={condition}>
      <div style={styles.base}>
        Please verify your email address.
        <a onClick={onResend} style={{cursor: 'pointer', paddingLeft: 10}}>Resend the verification email.</a>
      </div>
    </Nag>
  );
}