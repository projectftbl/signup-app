import React from 'react';
import range from 'lodash/utility/range';
import { Message } from '../../../components';
import Member, { Header, Empty } from './member';
import Title, { Paging } from './title';

export default ({ members, ...rest }) => {
  const empty = members.meta.query.limit - members.data.length;

  return (
    <div>
      <Title meta={members.meta} {...rest} />
      <Header />

      {members.data.length === 0 && !members.fetching && <Message message='No members found' />}

      {members.data.map((member, i) => <Member key={member.id} member={member} {...rest} last={i === members.data.length-1} />)}
      {empty > 0 && range(0, empty).map((_, i) => <Empty key={i} />)}

      {members.data.length > 0 && <Paging meta={members.meta} fetching={members.fetching} {...rest} />}
    </div>
  );
};
