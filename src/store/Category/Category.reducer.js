/* eslint-disable prefer-destructuring */
import { GET_CATEGORIES, UPDATE_ACTIVE_CATEGORY } from './Category.action';

export const getInitialState = () => ({
  categories: [],
  activeCategory: '',
});

const validateCategory = (newCategory, allCategories) => {
  if (!newCategory) return true;
  const normalizedCategory = newCategory.toLowerCase();
  return allCategories.includes(normalizedCategory);
};


export const updateActiveCategory = (action,state) => {
  let newCategory = action.category;
  const validCategory = validateCategory(newCategory, state.categories);
  if (newCategory === undefined) {
    newCategory = state.categories[0];
  }
  if (validCategory) {
    return {
      ...state,
      activeCategory: newCategory,
    };
  }
  return {
    ...state,
    activeCategory: false,
  };
}


const CategoryReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories?.map((category) => category.name),
      };
    case UPDATE_ACTIVE_CATEGORY:
      return updateActiveCategory(action,state);
    default:
      return state;
  }
};

export default CategoryReducer;
