import { getProductsList, selectAttribute } from './Product.action';

export class ProductDispatcher {
  static async updateProductsData(dispatch, products) {
    dispatch(getProductsList(products));
  }

  static updateSelectAttribute(dispatch, attribute) {
    dispatch(selectAttribute(attribute));
  }
}

export default new ProductDispatcher();
