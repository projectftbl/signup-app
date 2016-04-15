import React from 'react';
import license from '../data/license.md';
import Markdown from 'react-markdown';

export default _ => {
  return <Markdown source={license} />;
};