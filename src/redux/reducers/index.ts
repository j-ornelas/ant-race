import { combineReducers } from 'redux';
import {
  antState,
  AntStateInterface,
} from './antReducers';
import {
  userState,
  UserStateInterface,
} from './userReducers';

export interface StoreState {
  antState:AntStateInterface;
  userState:UserStateInterface;
}

export const reducers = combineReducers({
  antState,
  userState,
});
