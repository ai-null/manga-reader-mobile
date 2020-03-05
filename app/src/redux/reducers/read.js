import {GET_READ_DATA, REMOVE_CURRENT_READ_DATA} from '../../config';

export default function read(state = {}, action) {
  switch (action.type) {
    case GET_READ_DATA:
      return action.payload;

    case REMOVE_CURRENT_READ_DATA:
      return {};

    default:
      return state;
  }
}
