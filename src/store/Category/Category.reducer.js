/* eslint-disable prefer-destructuring */
import { GET_CATEGORIES } from './Category.action';

export const getInitialState = () => ({
  categories: []
});

const CategoryReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories.map((category) => category.name),
      };
    default:
      return state;
  }
};

export default CategoryReducer;
