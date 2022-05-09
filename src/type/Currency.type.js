import PropTypes from 'prop-types';

export const CurrencyItemType = PropTypes.shape({
    label: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
})

export const CurrenciesType = PropTypes.arrayOf(CurrencyItemType.isRequired);