import FILTER_CATEGORIES from '../Types/filterTypes';

const filterCategories = categories => ({
  type: FILTER_CATEGORIES,
  payload: categories,
});

export default filterCategories;
