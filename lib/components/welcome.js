import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { Heading } from './';
import color from 'color';

const Faq = Radium((_) => {
  const styles = {
    base: {
      display: 'inline-block'
    , borderRadius: '50%'
    , fontSize: 20
    , width: 80
    , height: 80
    , lineHeight: '80px'
    , backgroundColor: '#2185d0'
    , textAlign: 'center'
    , transition: 'all 250ms ease-in'
    , ':hover': {
        backgroundColor: color('#2185d0').darken(0.1).hexString()
      }
    }
  };

  return (
    <div style={{margin: '0 auto', textAlign: 'center'}}>
      <span style={styles.base}>
        <Link to='/faq' style={{color: '#fff', textDecoration: 'none', outline:'none'}}>FAQ</Link>
      </span>
    </div>
  );
});

const Para = ({ children }) => {
  const styles = {
    base: {
      margin: '0 auto'
    , textAlign: 'center'
    , paddingTop: 0
    , paddingBottom: 20
    }
  };

  return <p style={styles.base}>{children}</p>
};

export default ({ children }) => {
  const styles = {
    base: {
      width: '50%'
    , left: 0
    , position: 'absolute'
    , paddingLeft: 20
    , paddingRight: 20
    , borderRight: '1px solid #eee'
    , height: '100%'
    }
  };

  return (
    <span>
      <div style={styles.base}>
        <Heading style={{margin: '0 auto', textAlign: 'center'}}>Welcome to FTBL</Heading>

        <Para>
          Delivering the best football chat & content, <strong>together</strong>.
          Serving the football diet of every fan, providing an on-going, up-to-date, 
          360 degree view of the world of football.
        </Para>

        <Para>
          Co-owned by <strong>you</strong>, the people who make the content that matters most to the fans.
        </Para>

        <Para>
          Join <strong>FTBL</strong>, where the world&apos;s global football community unite on a single platform 
          and get rewarded for their contribution.
        </Para>

        <Para><strong>Together. We will own football.</strong></Para>

        <Faq/>
      </div>
      <div style={{marginLeft: '50%', paddingLeft: 20, height: '100%', position: 'relative'}}>
        {children}
      </div>
    </span>
  );
};
