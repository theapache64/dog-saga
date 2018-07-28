import { combineReducers } from 'redux';

import { dogReducer } from './DogReducer';

const allReducers = {
  dogReducer
};

export const rootReducer = combineReducers(allReducers);

