import {GET_DETAIL_MANGA, REMOVE_CURRENT_DATA} from '../../config';

export default function detail(state = {}, action) {
  switch (action.type) {
    case GET_DETAIL_MANGA:
      return action.payload;

    case REMOVE_CURRENT_DATA:
      return {};

    default:
      return state;
  }
}
