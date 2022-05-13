import { getCategories, updateActiveCategory } from './Category.action';

export class CategoryDispatcher {
  static async updateCategoriesData(dispatch, categories) {
    dispatch(getCategories(categories));
  };

  static async updateActiveCategory(dispatch, category) {
    dispatch(updateActiveCategory(category));
  }
}

export default new CategoryDispatcher();
