// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';

const App = () => {
    return (
        <Router>
            <div>
                <h1>eCommerce POS App</h1>
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/add-product" component={AddProduct} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
