import {
  DETAIL_MANGA,
  GET_DETAIL_MANGA,
  REMOVE_CURRENT_DATA,
} from '../../config';

export const getDetailData = (id, dispatch) => {
  fetch(DETAIL_MANGA + id)
    .then(e => {
      if (e.ok) {
        return e.json();
      } else {
        throw Error('Failed to request data from server');
      }
    })
    .then(e => {
      const {aka, author, categories, description} = e;
      return dispatch({
        type: GET_DETAIL_MANGA,
        payload: {aka, author, categories, description},
      });
    })
    .catch(err => err);
};

export const removeCurrentData = dispatch =>
  dispatch({
    type: REMOVE_CURRENT_DATA,
  });
