import { configureStore } from '@reduxjs/toolkit'
import searchFieldReducer from './searchSlice';
import monstersReducer from './monstersSlice';
import filteredMonstersReducer from './filteredMonstersSlice';

export const store = configureStore({
  reducer: {
    searchFieldReducer: searchFieldReducer,
    monstersReducer: monstersReducer,
    filteredMonstersReducer: filteredMonstersReducer
  },
}) 