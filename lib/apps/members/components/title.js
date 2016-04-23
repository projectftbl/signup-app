import React from 'react';
import { Heading, Menu } from '../../../components';
import Icon from './icons/download';
import { Reset } from '@ftbl/icons';

export const Filter = ({ q, period, search }) => {
  const filter = [
    { title: 'Today', active: period === 'today', onClick: _ => search({ q, period: 'today' }) }
  , { title: 'Week',  active: period === 'week',  onClick: _ => search({ q, period: 'week' }) }
  , { title: 'Month', active: period === 'month', onClick: _ => search({ q, period: 'month' }) }
  , { title: 'All',   active: period === null,    onClick: _ => search({ q }) }
  ];

  return <Menu items={filter} style={{display:'inline'}} />;
};

export const Paging = ({ meta: { query: { q = '', period = null, page = 1, limit }, total }, fetching, search }) => {
  const first = page === 1
      , pages = Math.ceil(total / limit)
      , last = page === pages;

  const paging = [
    { title: `Page ${page} of ${pages}` }
  , { title: 'Previous', onClick: _ => search({ q, period, page: page-1 }), disabled: first || fetching }
  , { title: 'Next', onClick: _ => search({ q, period, page: page+1 }), disabled: last || fetching }
  , { title: `${total} member${total === 1 ? '' : 's'} found` }
  ];

  return <Menu items={paging} style={{margin: '20px 0 0 0'}} />;
};

export default ({ meta: { query: { q = '', period = null, page = 1 }}, search, reset }) => {
  return (
    <Heading>
      Members <strong style={{marginLeft: 5}}>{q}</strong>

      {q && <Reset onClick={reset} size={14} style={{marginLeft: 5, marginTop: -2, cursor:'pointer'}} colour='#666' />}

      <div style={{float:'right'}}>
        <Filter q={q} period={period} search={search} />

        <a href={`/api/members/csv?q=${q}`} style={{marginLeft: 20}}>
          <Icon />
        </a>
      </div>

    </Heading>
  );
};