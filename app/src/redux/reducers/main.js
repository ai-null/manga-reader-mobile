import {GET_DISCOVER_DATA, GET_DETAIL_MANGA, GET_CHAPTER} from '../../config';

export default function main(state = {}, action) {
  switch (action.type) {
    case GET_DISCOVER_DATA:
      return {manga_list: action.payload};

    case GET_DETAIL_MANGA:
      return {detail: action.payload};

    case GET_CHAPTER:
      return {chapter: action.payload};

    default:
      return state;
  }
}
