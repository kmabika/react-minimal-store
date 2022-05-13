import { PureComponent } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import ProductDescriptionPage from "./ProductDescriptionPage.component";
import { QueryDispatcher } from "Util/QueryDispatcher/QueryDispatcher";
import { CartDispatcher } from "Store/Cart/Cart.dispatcher";
import { toast } from "react-toastify";
import { toastAction } from "Util/";
import NotFoundPage from "Route/NotFoundPage/NotFoundPage.component";

export const mapStateToProps = (state) => ({
  selectedProduct: state.ProductReducer.selectedProduct,
  activeCurrency: state.CurrencyReducer.selectedCurrency,
});

export const mapDispatchToProps = (dispatch) => ({
  handleFetchProductData: (productid) => QueryDispatcher.handleFetchProductData(dispatch, productid),
  addProductToCart: (product) => CartDispatcher.addProductToCart(dispatch, product),
});


export class ProductDescriptionPageContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loadingState: true, hasError: false };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    const { addProductToCart, selectedProduct } = this.props;
    const { attributes,name, id, prices, gallery, brand } = selectedProduct;
    const productCartInfo = { id: id, name: name, brand,image: gallery[0], images:gallery, prices: prices, attributes: attributes };
    let attributesSelected = '';

    if (attributes.length) {
      attributes.map((attribute) => {
        attributesSelected = attribute.items.some((item) => item.isSelected === true);
        return attribute;
      });
    } else {
      attributesSelected = true;
    }

    if (!attributesSelected) {
      toast.error(`Select some attributes`, toastAction)
    } else {
      addProductToCart(productCartInfo);
      toast.success(`${selectedProduct.name} added to cart`, toastAction)
    }
  }

  async componentDidMount() {
    const productId = this.props.match.params.id;
    const { handleFetchProductData } = this.props;
    const validProduct = await handleFetchProductData(productId);

    if (validProduct) {
      this.setState({ hasError: false, loadingState: false });
    } else { this.setState({ hasError: true, loadingState: false }); }
  }

  containerProps() {
    const { loadingState, hasError } = this.state;
    const { selectedProduct, activeCurrency } = this.props;
    const filtredPrice = selectedProduct.prices.filter(
      (price) => price.currency.symbol === activeCurrency.symbol,
    )[0];
    return {
      loadingState,
      hasError,
      filtredPrice,
      handleAddToCart: this.handleAddToCart,
      selectedProduct,
      activeCurrency,
    }
  }

  render() {
    const { loadingState, hasError } = this.state;
    if(hasError){
      return (<NotFoundPage/>)
    }
    return (
      <>
        {!loadingState && (
          <ProductDescriptionPage {...this.containerProps()} />
        )}
      </>
    )
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDescriptionPageContainer));