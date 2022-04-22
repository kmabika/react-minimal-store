import {
    PureComponent
} from 'react';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import ProductListPage from 'Route/ProductListPage';
import Header from 'Component/Header';
import ProductDescriptionPage from 'Route/ProductDescriptionPage';
import CartPage from 'Route/CartPage';

export class Router extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<ProductListPage categoryName={"all"} />} />
                    <Route path="/:category" element={<ProductListPage/>}/>
                    <Route path="/products/product" element={<ProductDescriptionPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;