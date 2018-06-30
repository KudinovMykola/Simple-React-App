import { SELECT_CLIENT } from '../constants.js';

const initialState = null;

export default function (state=initialState, action) {

  switch (action.type) {
    case SELECT_CLIENT:
      return action.payload;
    default:
      return state;
  }

}
