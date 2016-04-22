import React, { Component } from 'react';
import Radium from 'radium';
import Question from './question';
import { Up, Down } from '../../../components/icons';

const Section = ({ faq, children, onClick }) => {
  const styles = {
    base: {
      fontSize: '1.3em'
    , cursor: 'pointer'
    , textTransform: 'uppercase'
    , fontWeight: 700
    , paddingBottom: 5
    , borderBottom: '3px solid #eee'
    }
  };

  const Icon = faq.active ? Up : Down;

  return (
    <div style={styles.base} onClick={onClick}>
      <Icon style={{marginTop:2, float:'left', display:'block'}} colour='#666' />
      <div style={{paddingLeft: 25}}>{children}</div>
    </div>
  );
};

const Questions = Radium(({ faq, toggle }) => {
  const styles = {
    base: {
      maxHeight: 0
    , overflow: 'hidden'
    , transition: 'all 0.5s ease-in-out'
    , paddingLeft: 10
    , paddingRight: 20
    , backgroundColor: '#eee'
    }
  , active: {
      maxHeight: 2000
    }
  };

  const questions = faq.questions.map(question => 
    <Question key={question.index} section={faq} question={question} toggle={toggle} />
  );

  return (
    <div style={[ styles.base, faq.active && styles.active ]}>
      {questions}
    </div>
  );
});

export default ({ faq, toggle }) => {
  const styles = {
    base: {
      marginBottom: 10
    }
  };

  return (
    <div style={styles.base}>
      <Section faq={faq} onClick={() => toggle(faq.index)}>{faq.title}</Section>
      <Questions faq={faq} toggle={toggle} />
    </div>
  );
};