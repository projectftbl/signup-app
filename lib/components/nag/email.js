import React from 'react';
import Nag from './';

export default ({ onResend, condition }) => {
  return (
    <Nag condition={condition}>
      Please verify your email address.
      <a onClick={onResend} style={{cursor: 'pointer', paddingLeft: 5, fontWeight: 700}}>
        Resend the verification email
      </a>.
    </Nag>
  );
}