import React from 'react';
import Radium from 'radium';
import moment from 'moment';
import { connect } from 'react-redux';
import { Email, Spinner } from '@ftbl/icons';
import { Up, Down } from '../../../components/icons';
import { accountsSelector } from '../ducks/accounts';
import { userSelector } from '../ducks/user';
import Accounts from './accounts';

const Column = Radium(({ children, width, align = 'left', style }) => {
  const styles = {
    base: {
      float: 'left'
    , textAlign: align
    , width
    , paddingRight: 10 
    }
  , right: {
      paddingRight: 0
    , paddingLeft: 10
    }
  };

  return (
    <span style={[ styles.base, align === 'right' && styles.right, style ]}>
      {children}
    </span>
  );
});

export const Header = _ => {
  const styles = {
    base: {
      paddingTop: 5
    , paddingBottom: 5
    , marginTop: 5
    , marginBottom: 5
    , fontSize: '0.9em'
    , color: '#666'
    , clear: 'both'
    , overflow: 'hidden'
    }
  };

  return (
    <div style={styles.base}>
      <Column width='25%'>Member</Column>
      <Column width='25%'>Registered By</Column>
      <Column width='10%'>Type</Column>
      <Column width='15%'>Referrer</Column>
      <Column width='25%' align='right'><br/></Column>
    </div>
  );
};

export const Empty = _ => {
  const styles = {
    base: {
      paddingTop: 5
    , paddingBottom: 5
    , marginTop: 5
    , marginBottom: 5
    , borderBottom: '2px solid transparent'
    , clear: 'both'
    , overflow: 'hidden'
    }
  };

  return (
    <div style={styles.base}><br/></div>
  );
};

export const Member = Radium(({ member, user, accounts, list, last }) => {
  const styles = {
    base: {
      cursor: 'pointer'
    , paddingTop: 5
    , paddingBottom: 5
    , marginTop: 5
    , marginBottom: 5
    , borderBottom: '1px solid #eee'
    , clear: 'both'
    , overflow: 'hidden'
    }
  , last: {
      borderBottom: '1px solid transparent'
    }
  };

  const listAccounts = _ => list(member);

  const Icon = accounts && accounts.active ? Up : Down;

  return (
    <div style={[ styles.base, last && styles.last ]} onClick={listAccounts}>
      <Column width='25%'>
        <a href={`mailto:${user && user.email}`}>
          <Email size={20} style={{marginTop:-4, marginRight:10}}/>
        </a>
        <strong>{member.name}</strong>
      </Column>
      <Column width='25%'>
        <span style={{fontSize:'0.9em'}}>
          {user && user.name}
          {!user && <Spinner rotate={true} size={20} colour='#ccc' style={{marginTop:-4}} />}
        </span>
      </Column>
      <Column width='10%'>{member.type}</Column>
      <Column width='15%'>{member.referrerCode || <br/>}</Column>
      <Column width='25%' align='right'>
        <span style={{fontSize:'0.9em'}}>{moment(member.joinedAt).fromNow()}</span>
        <Icon size={16} colour='#ccc' style={{marginTop:-2, marginLeft:10}}/>
      </Column>

      <Accounts accounts={accounts} />
    </div>
  );
});

const mapStateToProps = (state, props) => {
  return { 
    accounts: accountsSelector(state, props) 
  , user: userSelector(state, props)
  };
};

export default connect(mapStateToProps)(Member);