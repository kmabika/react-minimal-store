import { PureComponent } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.component';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store } from 'Store/';

export class AppContainer extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    );
  }
}

export default AppContainer;
