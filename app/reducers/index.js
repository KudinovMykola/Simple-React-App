import {combineReducers} from 'redux';
import Client from './client';
import SelectedClient from './selected_client';
import Filter from './filter';

const allReducers = combineReducers({
  clients: Client,
  selected: SelectedClient,
  filter: Filter
});

export default allReducers
