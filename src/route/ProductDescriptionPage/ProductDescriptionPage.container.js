import { PureComponent } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import ProductDescriptionPage from "./ProductDescriptionPage.component";
import { QueryDispatcher } from "Util/QueryDispatcher/QueryDispatcher";
import { CartDispatcher } from "Store/Cart/Cart.dispatcher";
import { CategoryDispatcher } from "Store/Category/Category.dispatcher";
import { toast } from "react-toastify";
import { toastAction } from "Util/";
import NotFoundPage from "Route/NotFoundPage/NotFoundPage.component";
import { updateActiveCategory } from "Store/Category/Category.action";

export const mapStateToProps = (state) => ({
  selectedProduct: state.ProductReducer.selectedProduct,
  activeCurrency: state.CurrencyReducer.selectedCurrency,
});

export const mapDispatchToProps = (dispatch) => ({
  handleFetchProductData: (productid) => QueryDispatcher.handleFetchProductData(dispatch, productid),
  addProductToCart: (product) => CartDispatcher.addProductToCart(dispatch, product),
  updateActiveCategory: (category) => CategoryDispatcher.updateActiveCategory(dispatch,category),
});


export class ProductDescriptionPageContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, hasError: false };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  };


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
    const category = this.props.match.category
    const { handleFetchProductData } = this.props;
    const validProduct = await handleFetchProductData(productId).finally(() => {updateActiveCategory(category)});

    if (validProduct) {
      this.setState({ hasError: false, isLoading: false });
    } else { this.setState({ hasError: true, isLoading: false }); }
  }

  containerProps() {
    const { isLoading, hasError } = this.state;
    const { selectedProduct, activeCurrency } = this.props;
    // const filtredPrice = selectedProduct.prices.filter(
    //   (price) => price.currency.symbol === activeCurrency.symbol,
    // )[0];
    return {
      isLoading,
      hasError,
      handleAddToCart: this.handleAddToCart,
      selectedProduct,
      activeCurrency,
    }
  }

  render() {
    const { hasError } = this.state;
    const {selectedProduct} = this.props;
    
    if(hasError){
      return (<NotFoundPage/>)
    };

    return (
      <>
        {selectedProduct !== undefined && (
          <ProductDescriptionPage {...this.containerProps()} />
        )}
      </>
    )
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDescriptionPageContainer));