import { combineReducers } from 'redux';
import load from './load';
import select from './select';
import set_filter from './set_filter'
import filter from './filter';

const allReducers = combineReducers({
  loaded: load,
  selected: select,
  filter_word: set_filter,
  filtered: filter
});

export default allReducers
