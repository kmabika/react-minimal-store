import PropTypes from 'prop-types';
import { AttributesType } from './ProductList.type';
import { PricesItem } from './Price.type';

export const CartItemType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  prices: PricesItem.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.string),
  attributes: AttributesType,
  image: PropTypes.string.isRequired,
  cartItemId: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
});

export const CartItemsType = PropTypes.arrayOf(CartItemType);
