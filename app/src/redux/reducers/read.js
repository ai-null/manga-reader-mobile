import {GET_READ_DATA} from '../../config';

export default function read(state = {}, action) {
  switch (action.type) {
    case GET_READ_DATA:
      return action.payload;

    default:
      return state;
  }
}
