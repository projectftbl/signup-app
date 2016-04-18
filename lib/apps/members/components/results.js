import React, { Component, PropTypes } from 'react';

export default ({ members }) => {
  return (
    <div>
      {members.data.length}
    </div>
  );
};
