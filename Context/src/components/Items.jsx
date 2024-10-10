import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../stores/Cart';
const Items = (probs) => {
    const cartstates = useContext(CartContext);
    console.log(cartstates);
    return (
        <div>
            <h4>Item name:{probs.name}</h4>
            <p>price:{probs.price}</p>
            <button onClick={() => cartstates.setitems([...cartstates.items, { name: probs.name, price: probs.price }])}>Add to cart</button>
        </div>
    )
}

export default Items;
