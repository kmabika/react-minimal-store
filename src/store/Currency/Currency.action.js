export const UPDATE_SELECTED_CURRENCY = 'UPDATE_SELECTED_CURRENCY';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const updateSelectedCurrency = (currency) => ({
  type: UPDATE_SELECTED_CURRENCY,
  currency,
});
