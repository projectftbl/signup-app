import React from 'react';
import { YouTube, Rss, Facebook, Twitter } from '@ftbl/icons';

const Icons = {
  facebook: Facebook
, twitter: Twitter
, google: YouTube
};

export default ({ network, onConnect, colour }) => {
  const styles = {
    base: {
      cursor: 'pointer'
    , paddingRight: 10
    }
  };

  const Icon = Icons[network];

  return (
    <a onClick={() => onConnect(network)} style={styles.base}>
      <Icon colour={colour} size={36} />
    </a>
  );
};
