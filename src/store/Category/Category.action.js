export const GET_CATEGORIES = 'GET_CATEGORIES';
export const UPDATE_ACTIVE_CATEGORY = 'UPDATE_ACTIVE_CATEGORY';
export const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories,
});

export const updateSelectedCategory = (category) => ({
  type: UPDATE_ACTIVE_CATEGORY,
  category,
})
