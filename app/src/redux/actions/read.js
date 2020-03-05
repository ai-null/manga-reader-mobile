import {GET_READ_DATA, CHAPTER, REMOVE_CURRENT_READ_DATA} from '../../config';
import {instance} from '../../helper/http';

export const getReadData = (id, dispatch) => {
  instance
    .get(CHAPTER + id)
    .then(e => {
      if (e.data) {
        console.log(e.data);
        return e.data;
      } else {
        throw Error('Failed to request data from server');
      }
    })
    .then(e => {
      console.log(e);
      return dispatch({
        type: GET_READ_DATA,
        payload: e, // RETURNED DATA [] W/O PROPS
      });
    })
    .catch(err => err);
};

export const removeCurrentReadData = dispatch => {
  dispatch({
    type: REMOVE_CURRENT_READ_DATA,
  });
};
