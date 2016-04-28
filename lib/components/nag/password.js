import React from 'react';
import Nag from './';

export default ({ onResend, condition }) => {
  return (
    <Nag condition={condition}>
      <span>Please change your password before continuing.</span>
    </Nag>
  );
}