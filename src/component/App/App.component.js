import React, { PureComponent } from "react";
import Router from "Component/Router";
import GlobalStyle from "Style/GlobalStyle/globalStyles";

export class App extends PureComponent {
  render() {
    return(
      <React.Fragment>
        <GlobalStyle/>
      <Router />
      </React.Fragment>
    )
  }
}

export default App;