import { nameAppKey } from 'store/persist';

export function getGroup(state: any, payload: any) {
  const newState = { ...payload }
  sessionStorage.setItem(`${nameAppKey}_group`, JSON.stringify(newState))
  return newState;
}
