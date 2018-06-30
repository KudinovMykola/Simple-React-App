import { SET_FILTER } from '../constants.js';

const initialState = '';

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }

}
