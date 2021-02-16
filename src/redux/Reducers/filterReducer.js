import FILTER_CATEGORIES from '../Types/filterTypes';

const initialState = {
  filtering: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CATEGORIES: return (action.payload === 'All' ? '' : action.payload);

    default: return state;
  }
};

export default filterReducer;
