import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import CurrencyReducer from 'Store/Currency/Currency.reducer';
import ProductReducer from './Product/Product.reducer';
import CategoryReducer from './Category/Category.reducer';
import CartReducer from './Cart/Cart.reducer';

const reducersList = {
  CurrencyReducer,
  ProductReducer,
  CategoryReducer,
  CartReducer,
};

const rootReducer = combineReducers(reducersList);

const persistConfig = {
  key: 'scanditest-storage',
  storage,
  whitelist: ['CurrencyReducer', 'CartReducer'],
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer);
const persistor = persistStore(store);

export { persistor, store };
