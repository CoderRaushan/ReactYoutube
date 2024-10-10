import { createContext, useState } from "react";
export const CartContext = createContext(null);

export const CartProvider = (probs) => { 
    const [items, setitems] = useState([]);
    return (
        <CartContext.Provider value={{ items, setitems }}>
            {probs.children}
        </CartContext.Provider>
    )
}


