import React from 'react';
import { Heading } from '../components';

export default props => {
  return (
    <div>
      <Heading>Page Not Found</Heading>
      <p>You are attempting to access a page that does not exist.</p>
    </div>
  );
};
