import { ActionTypes, Action } from '../types';

export interface UserStateInterface {
  token:string|null;
}
const _DEFAULT_USER_STATE = {
  token: null,
}

export const userState = (state:UserStateInterface = _DEFAULT_USER_STATE, action:Action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, token: action.payload.token};
    default:
      return state;
  }
}
