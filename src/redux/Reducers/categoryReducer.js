import { FETCH_CATEGORIES, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS } from '../Types/reduxTypes';

const initailState = {
  loading: true,
  data: [],
  error: '',
};

const categoryReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES: return {
      ...state,
      loading: true,
    };

    case FETCH_CATEGORIES_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case FETCH_CATEGORIES_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    default: return state;
  }
};

export default categoryReducer;
