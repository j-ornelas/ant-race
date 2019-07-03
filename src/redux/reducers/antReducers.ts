import { ActionTypes, Action } from '../types';
import { Ant } from '../../interfaces';

export interface AntStateInterface {
  allAnts: Ant[];
}
const _DEFAULT_ANT_STATE = {
  allAnts: [],
}

export const antState = (state:AntStateInterface = _DEFAULT_ANT_STATE, action:Action) => {
  switch (action.type) {
    case ActionTypes.SET_ANTS:
      return { ...state, allAnts: action.payload };
    case ActionTypes.START_CALCULATING:
      const updatedAntsStart:Ant[] = [...state.allAnts];
      updatedAntsStart.forEach(ant => {
        if (ant.name === action.payload.name) {
          ant.isCalculating = true;
          ant.chanceToWin = undefined;
        }
      })
      return {...state, allAnts: updatedAntsStart };
    case ActionTypes.END_CALCULATING:
      const updatedAntsEnd:Ant[] = [...state.allAnts];
      updatedAntsEnd.forEach(ant => {
        if (ant.name === action.payload.ant.name) {
          ant.isCalculating = false;
          ant.chanceToWin = action.payload.chanceToWin;
        }
      })
      return {...state, allAnts: updatedAntsEnd };
    default:
      return state;
  }
}
