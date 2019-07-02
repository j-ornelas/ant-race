import { ActionTypes } from '../types';
import { Ant } from '../../interfaces/';

// Set all ants.
export interface SetAntsInterface {
  type:ActionTypes.SET_ANTS;
  payload: Ant[];
}
export const setAnts = (ants:Ant[]) => ({
  type: ActionTypes.SET_ANTS,
  payload: ants
})
// start calculating
export interface StartCalculatingInterface {
  type: ActionTypes.START_CALCULATING,
  payload: Ant;
}
export const startCalculating = (ant:Ant) => ({
  type: ActionTypes.START_CALCULATING,
  payload: ant
});
// end calculating
export interface EndCalculatingInterface {
  type: ActionTypes.END_CALCULATING,
  payload: {
    ant:Ant;
    chanceToWin:number;
  }
}
export const endCalculating = (ant:Ant, chanceToWin:number) => ({
  type: ActionTypes.END_CALCULATING,
  payload: { ant, chanceToWin }
});
