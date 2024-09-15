// src/ProductPage.js
import React from 'react';
import { useCart } from './CartContext';

const ProductPage = () => {
    const { products, addToCart } = useCart();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Products</h1>
            <div>
                {products.map(product => (
                    <div key={product.id} style={{ marginBottom: '20px' }}>
                        <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
