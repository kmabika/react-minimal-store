import { getProductsList, selectAttribute, updateActiveProduct, resetProductAttributes, resetProductsAttributes } from './Product.action';

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

  static resetProductAttributes(dispatch,product){
    dispatch(resetProductAttributes(product))
  }

  static resetProductsAttributes(dispatch) {
    dispatch(resetProductsAttributes());
  }
}

export default new ProductDispatcher();
