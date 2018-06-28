import axios from 'axios';
import { AJAX_SUCCESS, AJAX_ERROR } from '../constants.js';

export const ajaxRequestFunction = () => {
  return function(dispatch){
   axios.get('clients.json')
       .then((response) => {
           dispatch({type:'AJAX_SUCCESS', payload:response.data});
       })
       .catch((err) => {
           dispatch({type:'AJAX_ERROR', payload:err});
       })
     }
}

export const select = (client) => {
  return {
    type: "CLIENT_SELECTED",
    payload: client
  }
};
