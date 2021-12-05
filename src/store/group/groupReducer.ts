import { getGroup } from 'store/group/groupActions';
import { persist } from 'store/persist';

const userState = {
  ...persist(null, 'group'),
} as groupStateType;

export type groupStateType = {
  group: null;
};

const clean = () => {
  console.log('faut que ça clean')
  return {};
};

export function groupReducer(state = userState, action: any) {
  switch (action.type) {
    case 'group/get-group':
      return getGroup(state, action.payload);
    case 'group/clean':
      return clean();
    default:
      return state;
  }
}
