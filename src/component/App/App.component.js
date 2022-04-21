import React, { PureComponent } from "react";
import { Provider } from 'react-redux'
import Router from "Component/Router";

import { store } from "Store/";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

export class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ApolloProvider>
    )
  }
}

export default App;