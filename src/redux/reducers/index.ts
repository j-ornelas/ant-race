import { combineReducers } from 'redux';
import {
  antState,
  AntStateInterface,
} from './antReducers';

export interface StoreState {
  antState:AntStateInterface
}

export const reducers = combineReducers<StoreState>({
  antState,
});
