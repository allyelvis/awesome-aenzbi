// frontend/src/pages/ProductList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
            setProducts(res.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.name} - $ {product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
