import { ActionTypes } from '../types';
import { LoginResponse } from '../../interfaces/';

// loginUser
export interface LoginInterface {
  type:ActionTypes.LOGIN_USER;
  payload:LoginResponse;
}
export const loginUser = ({ token }:LoginResponse) => ({
  type: ActionTypes.LOGIN_USER,
  payload: { token }
})
