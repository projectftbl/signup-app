import React, { Component, PropTypes } from 'react';
import { Heading } from '../../../components';
import Icon from './icons/download';

export default ({ members }) => {
  return (
    <div>
      <Heading>
        {members.data.length}

        <a style={{float:'right'}} href='/api/members/csv'>
          <Icon />
        </a>
      </Heading>
    </div>
  );
};
