import {MANGA_LIST_PAGING, GET_DISCOVER_DATA} from '../../config';
import Http from '../../helper/http';

export const getDiscoverData = (page, dispatch) => {
  Http.get(MANGA_LIST_PAGING + page)
    .then(e => {
      if (e.data) {
        return e.data;
      } else {
        throw Error('Failed to request data from server');
      }
    })
    .then(e =>
      dispatch({
        type: GET_DISCOVER_DATA,
        payload: e.manga,
      }),
    )
    .catch(err => err);
};
