import React, { Component } from 'react';
import Radium from 'radium';

const Answer = Radium(({ answer, active }) => {
  const styles = {
    base: {
      fontSize: '1.1em'
    , maxHeight: 0
    , overflow: 'hidden'
    , transition: 'all 0.5s ease-out'
    }
  , active: {
      maxHeight: 200
    }
  };
  return <div style={[ styles.base, active && styles.active ]}>A: {answer}</div>
});

const Question = ({ question }) => {
  const styles = {
    base: {
      fontSize: '1.2em'
    }
  };
  return <div style={styles.base}>Q: {question}</div>
};

export default ({ section, question, toggle }) => {
  const styles = {
    base: {
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.base} onClick={() => toggle(section.index, question.index)}>
      <Question question={question.question} /> 
      <Answer answer={question.answer} active={question.active} /> 
    </div>
  );
};
