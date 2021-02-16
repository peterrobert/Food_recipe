import { FETCH_CATEGORIES } from '../Types/reduxTypes';
import categoryReducer from './categoryReducer';

describe('Category reducer', () => {
  it('should return an object with loading true', () => {
    const categories = {
      loading: true,
      data: [],
      error: '',
    };

    const newState = categoryReducer(undefined, {
      types: FETCH_CATEGORIES,
      payload: categories,
    });

    expect(newState).toEqual(categories);
  });
});
