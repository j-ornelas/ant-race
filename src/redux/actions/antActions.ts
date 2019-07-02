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
