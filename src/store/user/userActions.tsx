import { userStateType } from 'store/user/userReducer';

export function authenticate(state: userStateType, payload: any) {
  console.group('userAction');
  console.log('state : ', state);
  console.log('payload : ', payload);
  payload.navigate('/dashboard');
  console.groupEnd();

  return state;
}
