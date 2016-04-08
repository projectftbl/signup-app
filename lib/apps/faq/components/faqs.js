import React from 'react';
import Section from './section';

export default ({ faq, toggle }) => {
  return (
    <div>
      {faq.faqs.map(faq => <Section key={faq.index} faq={faq} toggle={toggle} />)}
    </div>
  );
};