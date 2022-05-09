import { getCategories } from './Category.action';

export class CategoryDispatcher {
  static async updateCategoriesData(dispatch, categories) {
    dispatch(getCategories(categories));
  };
}

export default new CategoryDispatcher();
