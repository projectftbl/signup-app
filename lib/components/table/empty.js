import React from 'react';
import range from 'lodash/utility/range';
import Row from './row';

export default ({ limit, length }) => {
  const empty = limit - length;

  return (
    <span>
      {empty > 0 && range(0, empty).map((_, i) => <Row kind='empty' key={i} />)}
    </span>
  );
};
