import { authenticate } from 'store/user/userActions';

const userState = {
  user: {
    pseudo: null,
  },
} as userStateType;

export type userStateType = {
  user: {
    pseudo: String | null;
  };
};

export function userReducer(state = userState, action: any) {
  switch (action.type) {
    case 'user/authenticate':
      return authenticate(state, action.payload);
    case 'user/disconnect':
      return {
        user: {
          ...state.user,
          pseudo: null,
        },
      };
    default:
      return state;
  }
}
