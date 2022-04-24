import {
    PureComponent
} from 'react';
import { BrowserRouter, Route, Switch, generate } from 'react-router-dom';
import ProductListPage from 'Route/ProductListPage';
import Header from 'Component/Header';
import ProductDescriptionPage from 'Route/ProductDescriptionPage';
import CartPage from 'Route/CartPage';
import { Redirect } from 'react-router-dom';
import { generatePath } from 'react-router-dom';

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
                    <Route path="/:category" component={ProductListPage}/> 
                    {/* <Route path="/all" element={<ProductListPage categoryName={"all"} />} />
                    <Route path="/:category" component={<ProductListPage/>}/>
                    <Route path="/products/product" element={<ProductDescriptionPage />} />
                    <Route path="/cart" element={<CartPage />} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;