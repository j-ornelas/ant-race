import {
  SetAntsInterface,
  StartCalculatingInterface,
  EndCalculatingInterface,
  LoginInterface,
} from './actions';

export enum ActionTypes {
  SET_ANTS,
  START_CALCULATING,
  END_CALCULATING,
  LOGIN_USER,
}

export type Action =
SetAntsInterface|
StartCalculatingInterface|
EndCalculatingInterface|
LoginInterface;
