import {MANGA_LIST_PAGING, GET_DISCOVER_DATA} from '../../config';

export const getDiscoverData = (page, dispatch) => {
  fetch(MANGA_LIST_PAGING + page)
    .then(e => {
      if (e.ok) {
        return e.json();
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
