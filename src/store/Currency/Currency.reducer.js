import { GET_CURRENCIES, UPDATE_SELECTED_CURRENCY } from './Currency.action';

export const getInitialState = () => ({
  currencies: [],
  selectedCurrency: { symbol: '$', label: 'USD' },
});

const CurrencyReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        currencies: action.currencies,
      };
    case UPDATE_SELECTED_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.currency,
      };
    default:
      return state;
  }
};

export default CurrencyReducer;
