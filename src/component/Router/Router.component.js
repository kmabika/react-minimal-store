import {
    PureComponent
} from 'react';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import ProductListPage from 'Route/ProductListPage';
import Header from 'Component/Header';

export class Router extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<ProductListPage/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;