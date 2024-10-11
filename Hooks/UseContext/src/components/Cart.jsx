import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../stores/Cart';
export const Cart = () => {
    const cartstates = useContext(CartContext);
    const total_price = cartstates.items.reduce((a, b) => a + b.price, 0);
    return (
        <div>
            <h5>Total Items</h5>
            <ul>
            {
                cartstates.items.map((item) => <li key={item}>{item.name} - ${item.price}</li>)
            }
            </ul>
            <h5>Total bill:{total_price}</h5>
        </div>
    )
}
