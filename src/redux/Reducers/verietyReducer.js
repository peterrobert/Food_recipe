import {
  FETCH_VARIETY,
  FETCH_VARIETY_SUCCESS,
  FETCH_VARIETY_FAILURE,
} from "../Types/varietyTypes";

const initailState = {
  loading: true,
  data: [],
  error: "",
};

const varietyReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_VARIETY:
      return {
        ...state,
        loading: true,
      };

    case FETCH_VARIETY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };

    case FETCH_VARIETY_FAILURE:
      return {
        loading: true,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default varietyReducer