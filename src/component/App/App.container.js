import { PureComponent } from 'react';
import { Provider } from 'react-redux';

import { store } from 'Store/';
import App from './App.component';

export class AppContainer extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppContainer;
