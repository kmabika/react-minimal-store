import PropTypes from 'prop-types';
import { PriceItemType } from './Price.type';

export const AttributeItemType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  displayValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
});

export const AttributeType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(AttributeItemType).isRequired,
});

export const AttributesType = PropTypes.arrayOf(AttributeType);

export const ProductType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  prices: PropTypes.arrayOf(PriceItemType).isRequired,
  gallery: PropTypes.arrayOf(PropTypes.string),
  attributes: AttributesType,
});

export const ProductsListType = PropTypes.arrayOf(ProductType);
