import axios from 'axios';
import {
  AJAX_REQUEST,
  AJAX_SUCCESS,
  AJAX_ERROR,
  SELECT_CLIENT,
  SET_FILTER,
  FILTER} from '../constants.js';

export const ajaxRequest = () => {
  return function(dispatch){
   axios.get('clients.json')
       .then((response) => {
           dispatch({type:AJAX_SUCCESS, payload:response.data});
       })
       .catch((err) => {
           dispatch({type:AJAX_ERROR, payload:err});
       })
     }
}

export const select = (client) => {
  return {
    type: SELECT_CLIENT,
    payload: client
  }
}

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  }
}

export const filter = (list, word) => {

  return {
    type: FILTER,
    payload: {list: list, word: word}
  };

}
