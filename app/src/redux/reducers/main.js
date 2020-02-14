import {GET_DISCOVER_DATA} from '../../config';

export default function main(state = {}, action) {
  switch (action.type) {
    case GET_DISCOVER_DATA:
      return {manga_list: action.payload};

    default:
      return state;
  }
}
