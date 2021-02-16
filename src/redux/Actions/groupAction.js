import {
  FETCH_GROUP,
  FETCH_GROUP_FAILURE,
  FETCH_GROUP_SUCCESS,
} from '../Types/groupTypes';

const fetchGroup = () => ({
  type: FETCH_GROUP,
});

const fetchGroupSuccess = data => ({
  type: FETCH_GROUP_SUCCESS,
  payload: data,
});

const fetchGroupFailure = err => ({
  type: FETCH_GROUP_FAILURE,
  payload: err,
});

const dataGroup = title => dispatch => {
  dispatch(fetchGroup());

  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchGroupSuccess(data));
    })
    .catch(err => {
      dispatch(fetchGroupFailure(err));
    });
};

export {
  fetchGroup, fetchGroupSuccess, fetchGroupFailure, dataGroup,
};
