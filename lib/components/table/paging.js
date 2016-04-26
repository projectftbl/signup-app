import React from 'react';
import assign from 'lodash/object/assign';
import { Menu } from '../';

export default ({ fetching, search, entity, meta: { total, query }}) => {
  const first = query.page === 1
      , pages = Math.ceil(total / query.limit)
      , last = query.page === pages;

  const paging = [
    { title: `Page ${query.page} of ${pages}` }
  , { title: 'Previous', onClick: _ => search(assign({}, query, { page: query.page-1 })), disabled: first || fetching }
  , { title: 'Next', onClick: _ => search(assign({}, query, { page: query.page+1 })), disabled: last || fetching }
  , { title: `${total} ${entity}${total === 1 ? '' : 's'} found` }
  ];

  return <Menu items={paging} style={{margin: '20px 0 0 0'}} />;
};