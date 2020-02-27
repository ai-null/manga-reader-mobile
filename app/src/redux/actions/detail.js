import {
  DETAIL_MANGA,
  GET_DETAIL_MANGA,
  REMOVE_CURRENT_DATA,
} from '../../config';
import {instance} from '../../helper/http';

export const getDetailData = (id, dispatch) => {
  instance
    .get(DETAIL_MANGA + id)
    .then(e => {
      if (e.data) {
        return e.data;
      } else {
        throw Error('Failed to request data from server');
      }
    })
    .then(e => {
      const {aka, author, categories, description, chapters_len, chapters} = e;
      return dispatch({
        type: GET_DETAIL_MANGA,
        payload: {aka, author, categories, description, chapters_len, chapters},
      });
    })
    .catch(err => err);
};

export const removeCurrentData = dispatch =>
  dispatch({
    type: REMOVE_CURRENT_DATA,
  });
