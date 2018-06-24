import {combineReducers} from 'redux';
import ClientReducers from './client';

const allReducers = combineReducers({
  clients: ClientReducers
})

export default allReducers
