import {
    PureComponent
} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListPage from 'Route/ProductListPage';
import ProductDescriptionPage from 'Route/ProductDescriptionPage';
import CartPage from 'Route/CartPage';
import Header from 'Component/Header';
import { Redirect } from 'react-router-dom';

export class Router extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route  exact path="/" render={() => {
                        return(
                            <Redirect to={`/all`} component={ProductListPage} />
                        )
                    }}
                    />
                    <Route exact path="/cart" component={CartPage}/>
                    <Route exact path="/:category" component={ProductListPage}/> 
                    <Route exact path="/:category/:id" component={ProductDescriptionPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;