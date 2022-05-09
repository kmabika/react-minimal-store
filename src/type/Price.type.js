import PropTypes from 'prop-types';
import { CurrencyItemType } from './Currency.type';

export const PriceItemType = PropTypes.shape({
    amount: PropTypes.number.isRequired,
    currency: CurrencyItemType.isRequired,
});

export const PricesItem = PropTypes.arrayOf(PriceItemType.isRequired);