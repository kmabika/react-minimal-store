/* eslint-disable prefer-destructuring */
import { GET_CATEGORIES, UPDATE_ACTIVE_CATEGORY } from './Category.action';

export const getInitialState = () => ({
  categories: [],
  activeCategory: '',
});

export const updateSelectedCategory = (action, state) => {
  let selectedCategory = action.category;
  const isValidCategory = state.categories?.includes(
    selectedCategory.toLowerCase()
  );
  if (selectedCategory === undefined) {
    selectedCategory = state.categories[0];
  }
  if (isValidCategory) {
    return {
      ...state,
      activeCategory: selectedCategory,
    };
  }
  return {
    ...state,
    activeCategory: false,
  };
};

const CategoryReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories?.map((category) => category.name),
      };
    case UPDATE_ACTIVE_CATEGORY:
      return updateSelectedCategory(action, state);
    default:
      return state;
  }
};

export default CategoryReducer;
