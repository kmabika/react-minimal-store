import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProductDescriptionPage from './ProductDescriptionPage.component';
import { QueryDispatcher } from 'Util/QueryDispatcher/QueryDispatcher';
import { CartDispatcher } from 'Store/Cart/Cart.dispatcher';
import { CategoryDispatcher } from 'Store/Category/Category.dispatcher';
import { toast } from 'react-toastify';
import { toastAction } from 'Util/';
import NotFoundPage from 'Route/NotFoundPage/NotFoundPage.component';
import { ProductDispatcher } from 'Store/Product/Product.dispatcher';
import { CurrencyItemType } from 'Type/Currency.type';

export const mapStateToProps = (state) => ({
  selectedProduct: state.ProductReducer.selectedProduct,
  selectedCurrency: state.CurrencyReducer.selectedCurrency,
});

export const mapDispatchToProps = (dispatch) => ({
  handleFetchProductData: (productid) =>
    QueryDispatcher.handleFetchProductData(dispatch, productid),
  addProductToCart: (product) =>
    CartDispatcher.addProductToCart(dispatch, product),
  updateSelectedCategory: (category) =>
    CategoryDispatcher.updateSelectedCategory(dispatch, category),
  resetProductAttributes: (product) =>
    ProductDispatcher.resetProductAttributes(dispatch, product),
});

export class ProductDescriptionPageContainer extends PureComponent {
  static propTypes = {
    handleFetchProductData: PropTypes.func.isRequired,
    addProductToCart: PropTypes.func.isRequired,
    updateSelectedCategory: PropTypes.func.isRequired,
    resetProductAttributes: PropTypes.func.isRequired,
    selectedProduct: PropTypes.object.isRequired,
    selectedCurrency: CurrencyItemType,
    match: PropTypes.shape({
      params: PropTypes.shape({
        category: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    }),
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true, hasError: false };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    const { addProductToCart, selectedProduct, resetProductAttributes } =
      this.props;

    const { attributes, name, id, prices, gallery, brand } = selectedProduct;
    const productCartInfo = {
      id: id,
      name: name,
      brand,
      image: gallery[0],
      images: gallery,
      prices: prices,
      attributes: attributes,
    };
    let attributesSelected = '';

    if (attributes.length) {
      attributesSelected = attributes.every((attribute) =>
        attribute.items.some((item) => item.isSelected === true)
      );
    } else {
      attributesSelected = true;
    }

    if (!attributesSelected) {
      toast.error(`Select attributes!`, toastAction);
    } else {
      addProductToCart(productCartInfo);
      resetProductAttributes(selectedProduct);
      toast.success(
        `${selectedProduct.brand} ${selectedProduct.name} added to cart`,
        toastAction
      );
    }
  }

  async componentDidMount() {
    const productId = this.props.match.params.id;
    const category = this.props.match.params.category;
    const { handleFetchProductData, updateSelectedCategory } = this.props;
    const validProduct = await handleFetchProductData(productId).finally(() => {
      updateSelectedCategory(category);
    });
    if (validProduct) {
      this.setState({ hasError: false, isLoading: false });
    } else {
      this.setState({ hasError: true, isLoading: false });
    }
  }

  containerProps() {
    const { isLoading } = this.state;
    const { selectedProduct, selectedCurrency } = this.props;
    return {
      isLoading,
      handleAddToCart: this.handleAddToCart,
      selectedProduct,
      selectedCurrency,
    };
  }

  render() {
    const { hasError } = this.state;
    const { selectedProduct } = this.props;

    if (hasError) {
      return <NotFoundPage />;
    }

    return (
      <>
        {selectedProduct !== undefined && (
          <ProductDescriptionPage {...this.containerProps()} />
        )}
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDescriptionPageContainer)
);
