import { sortActionType, SORT_TYPE } from './actions';

export interface DirectionState {
  sortById: boolean;
  sortByTitle: boolean;
}

export const initialState = {
  sortById: false,
  sortByTitle: false
};

export const sortDirection = (state: DirectionState = initialState, action: sortActionType) => {
  switch (action.type) {
    case SORT_TYPE.SORT_BY_ID: {
      return { ...state, sortById: action.payload };
    }
    case SORT_TYPE.SORT_BY_TITLE: {
      return { ...state, sortByTitle: action.payload };
    }
    default:
      return state;
  }
};