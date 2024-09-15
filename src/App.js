// src/App.js
import React from 'react';
import { CartProvider } from './CartContext';
import CartPage from './CartPage';

const App = () => {
    return (
        <CartProvider>
            <CartPage />
        </CartProvider>
    );
};

export default App;
