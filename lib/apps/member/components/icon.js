import React from 'react';
import { YouTube, Rss, Facebook, Twitter } from '@ftbl/icons';

const Icons = {
  facebook: Facebook
, twitter: Twitter
, google: YouTube
, rss: Rss
};

export default ({ network, onConnect, colour, size = 36, style }) => {
  const styles = {
    base: {
      cursor: 'pointer'
    , paddingRight: 15
    }
  };

  const Icon = Icons[network];

  return (
    <a onClick={() => onConnect(network)} style={styles.base}>
      <Icon colour={colour} size={size} style={style} />
    </a>
  );
};
