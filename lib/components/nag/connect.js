import React from 'react';
import { Link } from 'react-router';
import { Err } from '@ftbl/icons';
import { Nag } from '@ftbl/component';

export default ({ condition }) => {
  return (
    <Nag condition={condition} Icon={Err} colour='#a95252'>
      <Link to='/member/connect' style={{color:'inherit'}}>
        Please connect your social accounts and RSS feeds.
      </Link>
    </Nag>
  );
}