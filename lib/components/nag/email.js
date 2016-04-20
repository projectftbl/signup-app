import React from 'react';
import Radium from 'radium';
import Nag from './';

const Send = Radium(({ children, onResend }) => {
  const styles = {
    base: {
      cursor: 'pointer'
    , paddingLeft: 5
    , fontWeight: 700
    , '@media (max-width: 639px)': {
        display: 'block'
      , paddingLeft: 0
      }
    }
  };

  return  (
    <span style={styles.base}>
      {children}
    </span>
  );
});

export default ({ onResend, condition }) => {
  return (
    <Nag condition={condition}>
      <span>Please verify your email address.</span>
      <Send onResend={onResend}>
        <a onClick={onResend} style={{color:'inherit'}}>
          Send the verification email again
        </a>.
      </Send>
    </Nag>
  );
}