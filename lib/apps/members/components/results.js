import React from 'react';
import { Message } from '../../../components';
import Member, { Header } from './member';
import Title, { Paging } from './title';

export default ({ members, ...rest }) => {
  return (
    <div>
      <Title query={members.query} {...rest} />
      
      <Header />
      
      {members.data.map((member, i) => <Member key={member.id} member={member} {...rest} last={i === members.data.length-1} />)}
      {members.data.length === 0 && !members.fetching && <Message message='No members found' />}

      <Paging query={members.query} {...rest} />
    </div>
  );
};
