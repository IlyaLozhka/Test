import { PayloadAction } from '../types';
import { DirectionState } from './reducer';

export enum SORT_TYPE {
  SORT_BY_ID = 'SORT_BY_ID',
  SORT_BY_TITLE = 'SORT_BY_ID',
}

export type sortActionType = PayloadAction<SORT_TYPE, DirectionState>