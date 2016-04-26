import React from 'react';
import { Row, Cell } from '../../../components/table';
import State, { Events } from '../../../components/table/state';

const Mark = ({ colour }) => {
  const styles = {
    base: {
      position: 'absolute'
    , width: 12
    , height: 7
    , background: 'transparent'
    , top: 4
    , right: 3
    , borderLeft: '3px solid ' + colour
    , borderBottom: '3px solid ' + colour
    , borderTop: 'none'
    , borderRight: 'none'
    , transform: 'rotate(-45deg)'
    }
  };

  return <span style={styles.base} />;
};

export const Member = State('member')(({ member, selected, user, setPrimary, state, dispatch, $ }) => {
  const events = Events({ dispatch, $, id: member.id });

  const isSelected = member.id === selected.id
      , style = isSelected ? {cursor:'default'} : null
      , onClick = isSelected ? null : _ => setPrimary(member, user);
      
  return (
    <Row onMouseOver={events.over} onMouseOut={events.out} onClick={onClick} style={style}>
      <Cell width='65%'>
        <strong>{member.name} </strong>
      </Cell>
      <Cell width='35%' align='right' hide={!isSelected && !state[member.id]} style={{position:'relative'}}>
        <Mark colour={isSelected ? '#666' : '#2185d0'} />
      </Cell>
    </Row>
  );
});

export default ({ members, member, session, setPrimary }) => {
  return (
    <div>
      <p style={{color: '#666', margin: '-5px 0 10px 0', paddingTop: 5}}>
        Select the active member
      </p>

      {members.data.map(m => 
        <Member key={m.id} member={m} selected={member} user={session.user} setPrimary={setPrimary} />
      )}
    </div>
  );
};
