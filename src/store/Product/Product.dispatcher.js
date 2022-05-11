import { getProductsList, selectAttribute, updateActiveProduct } from './Product.action';

export class ProductDispatcher {
  static async updateProductsData(dispatch, products) {
    dispatch(getProductsList(products));
  };

  static updateSelectAttribute(dispatch, attribute) {
    dispatch(selectAttribute(attribute));
  };

  static setActiveProduct(dispatch,product){
    dispatch(updateActiveProduct(product));
  };
}

export default new ProductDispatcher();
