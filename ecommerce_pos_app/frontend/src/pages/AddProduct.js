// frontend/src/pages/AddProduct.js

import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const newProduct = { name, price, description };
        await axios.post(`${process.env.REACT_APP_API_URL}/products`, newProduct);
        // Reset form
        setName(''); 
        setPrice('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;