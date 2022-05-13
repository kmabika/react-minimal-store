import {
  GET_PRODUCTS,
  SELECT_ATTRIBUTE,
  UPDATE_ACTIVE_PRODUCT
} from './Product.action';

export const getInitialState = () => ({
  products: [],
  selectedProduct: { },
});

export const getProductsList = (action, state) => {
  const availableProducts = action.products;
  return {
    ...state,
    products: availableProducts?.map((product) => ({
      ...product,
      attributes: product.attributes?.map((attribute) => ({
        ...attribute,
        items: attribute.items?.map((item) => ({
          ...item,
          isSelected: false,
        })),
      })),
    })),

  }
};

export const selectAttribute = (action, state) => {
  if (action.attribute?.selectedProduct !== undefined) {
      return {
        ...state,
        selectedProduct: {
          ...state.selectedProduct,
          attributes: state.selectedProduct.attributes?.map((attribute) => {
            if (attribute.name !== action.attribute.name) {
              return ({ ...attribute });
            }
            return ({
              ...attribute,
              items: attribute.items?.map((item) => {
                if (item.value !== action.attribute.value) {
                  return ({ ...item, isSelected: false });
                }
                return ({ ...item, isSelected: true });
              }),
            });
          }),
        },
      }
  } else {
    return {
      ...state,
      products: state.products?.map((product) => ({
        ...product,
        attributes: product.attributes?.map((attribute) => {
          if (attribute.name !== action.attribute.name) {
            return ({ ...attribute });
          }
          return ({
            ...attribute,
            items: attribute.items?.map((item) => {
              if (item.value !== action.attribute.value) {
                return ({ ...item, isSelected: false });
              }
              return ({ ...item, isSelected: true });
            }),
          });
        }),
      })),
    }
  }
}

export const updateActiveProduct = (action, state) => {
  const productToActivate = action.product;
  return {
    ...state,
    selectedProduct: {
      ...productToActivate,
      attributes: productToActivate.attributes?.map((attribute) => ({
        ...attribute,
        items: attribute.items?.map((option) => ({
          ...option,
          isSelected: false,
        })),
      })),
    },
  };
};


const ProductReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return getProductsList(action, state);
    }
    case UPDATE_ACTIVE_PRODUCT: {
      return updateActiveProduct(action, state)
    }
    case SELECT_ATTRIBUTE: {
      return selectAttribute(action, state)
    }
    default:
      return state;
  }
};

export default ProductReducer;
