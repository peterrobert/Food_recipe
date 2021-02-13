import { FETCH_GROUP, FETCH_GROUP_FAILURE, FETCH_GROUP_SUCCESS } from '../Types/groupTypes';

const initailState = {
  loading: true,
  data: [],
  error: '',
};

const groupReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_GROUP: return {
      ...state,
      loading: true,
    };

    case FETCH_GROUP_SUCCESS: return {
      loading: false,
      data: action.payload,
      error: '',
    };

    case FETCH_GROUP_FAILURE: return {
      loading: true,
      data: [],
      error: action.payload,
    };

    default: return state;
  }
};

export default groupReducer;
