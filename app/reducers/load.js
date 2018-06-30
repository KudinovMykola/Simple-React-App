
import { AJAX_SUCCESS } from '../constants.js';

const initialState = [];

export default function (state = initialState, action) {

  switch (action.type) {
    case AJAX_SUCCESS:
      return action.payload;
    default:
      return state;
    }

}
