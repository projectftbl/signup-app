import React from 'react';
import { YouTube, Rss, Facebook, Twitter, Instagram } from '@ftbl/icons';

const Icons = {
  facebook: Facebook
, twitter: Twitter
, google: YouTube
, instagram: Instagram
, rss: Rss
};

export default ({ network, onConnect, colour, size = 36, style, shape = 'circle' }) => {
  const styles = {
    base: {
      cursor: 'pointer'
    , paddingRight: 15
    }
  };

  const Icon = Icons[network];

  return (
    <a onClick={() => onConnect(network)} style={styles.base}>
      <Icon size={size} style={style} shape={shape} />
    </a>
  );
};
