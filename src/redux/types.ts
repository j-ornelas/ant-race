import {
  SetAntsInterface,
  StartCalculatingInterface,
  EndCalculatingInterface,
} from './actions';

export enum ActionTypes {
  SET_ANTS,
  START_CALCULATING,
  END_CALCULATING,
}

export type Action =
SetAntsInterface|
StartCalculatingInterface|
EndCalculatingInterface;
