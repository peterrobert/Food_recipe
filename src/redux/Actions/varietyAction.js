import {
  FETCH_VARIETY,
  FETCH_VARIETY_SUCCESS,
  FETCH_VARIETY_FAILURE,
} from '../Types/varietyTypes';

const fetchVariety = () => ({
  type: FETCH_VARIETY,
});

const fetchVarietySuccess = data => ({
  type: FETCH_VARIETY_SUCCESS,
  payload: data,
});

const fetchVarietyFailure = err => ({
  type: FETCH_VARIETY_FAILURE,
  payload: err,
});

const dataRecipe = title => dispatch => {
  dispatch(fetchVariety());

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
    .then(response => response.json())
    .then(data => {
      dispatch(fetchVarietySuccess(data));
    })
    .catch(err => {
      dispatch(fetchVarietyFailure(err));
    });
};

export {
  fetchVariety, fetchVarietySuccess, fetchVarietyFailure, dataRecipe,
};
