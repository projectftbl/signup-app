import React, { Component } from 'react';
import Radium from 'radium';
import Markdown from 'react-markdown';
import { Up, Down } from './icons';

const Answer = Radium(({ answer, active }) => {
  const styles = {
    base: {
      maxHeight: 0
    , fontSize: '0.9em'
    , overflow: 'hidden'
    , transition: 'all 0.5s ease-out'
    , color: '#666'
    , marginLeft: 22
    }
  , active: {
      maxHeight: 1000
    }
  };
  return (
    <div style={[ styles.base, active && styles.active ]}>
      <Markdown source={answer} />
    </div>
  );
});

const Question = ({ question }) => {
  const styles = {
    base: {
      color: '#666'
    , fontWeight: 700
    }
  };

  const Icon = question.active ? Up : Down;

  return (
    <div style={styles.base}>
      <Icon style={{ marginTop:-4, marginRight: 7 }} colour='#666' size={14} />
      <span>{question.question}</span>
    </div>
  );
};

export default ({ section, question, toggle }) => {
  const styles = {
    base: {
      cursor: 'pointer'
    , marginTop: 10
    , marginBottom: 10
    }
  };

  return (
    <div style={styles.base} onClick={() => toggle(section.index, question.index)}>
      <Question question={question} /> 
      <Answer answer={question.answer} active={question.active} /> 
    </div>
  );
};
