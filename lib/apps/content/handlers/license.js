import React from 'react';
import license from '../data/license.md';
import Markdown from 'react-markdown';

export default props => {
  return <Markdown source={license} />;
};