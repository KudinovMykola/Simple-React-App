import {combineReducers} from 'redux';
import ClientReducers from './client';
import SelectedClient from './selected_client';

const allReducers = combineReducers({
  clients: ClientReducers,
  selected: SelectedClient
});

export default allReducers
