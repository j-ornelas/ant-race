import { ActionTypes, Action } from '../types';
import { Ant } from '../../interfaces';

export interface AntStateInterface {
  allAnts: Ant[];
  runningTests: Ant[];
  finishedTests: Ant[];
}
const _DEFAULT_ANT_STATE = {
  allAnts: [],
  runningTests: [],
  finishedTests: [],
}

export const antState = (state:AntStateInterface = _DEFAULT_ANT_STATE, action:Action) => {
  switch (action.type) {
    case ActionTypes.SET_ANTS:
      return { ...state, allAnts: action.payload };
    default:
      return state;
  }
}
