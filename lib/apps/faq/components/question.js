import React, { Component } from 'react';
import Radium from 'radium';
import Markdown from 'react-markdown';

const Answer = Radium(({ answer, active }) => {
  const styles = {
    base: {
      maxHeight: 0
    , fontSize: '0.9em'
    , overflow: 'hidden'
    , marginBottom: 5
    , marginTop: 5
    , transition: 'all 0.5s ease-out'
    , color: '#666'
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
      color: '#333'
    , fontWeight: 700
    }
  };
  return <div style={styles.base}>{question}</div>
};

export default ({ section, question, toggle }) => {
  const styles = {
    base: {
      cursor: 'pointer'
    , marginBottom: 5
    }
  };

  return (
    <div style={styles.base} onClick={() => toggle(section.index, question.index)}>
      <Question question={question.question} /> 
      <Answer answer={question.answer} active={question.active} /> 
    </div>
  );
};
