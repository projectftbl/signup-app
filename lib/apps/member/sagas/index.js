import { fetchAccountsOnFetchMember, fetchAccountsOnSetPrimary, connect } from './accounts';
import { fetchUsersOnFetchMember, fetchUsersOnSetPrimary, invited } from './users';
import { update, signedOn, reloaded, signUp, signedUp, verified, setPrimary, createMember, createFailed } from './members';

export default [ 
  fetchAccountsOnFetchMember, fetchAccountsOnSetPrimary, connect
, fetchUsersOnFetchMember, fetchUsersOnSetPrimary, invited
, update, signedOn, reloaded, verified, signUp, signedUp, setPrimary, createMember, createFailed 
];