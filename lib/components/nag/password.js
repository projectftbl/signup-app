import React from 'react';
import { Nag } from '@ftbl/component';

export default ({ condition }) => {
  return (
    <Nag condition={condition}>
      <span>Please change your password before continuing.</span>
    </Nag>
  );
}