import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItem = (item,cantidad)=>{
        setCart([...cart,{...item, qty: cantidad}])
    }

    return (
        <CartContext.Provider value={{cart,value}}>
            {children}
        </CartContext.Provider>
    );
};

/* export const useCart = () => useContext(CartContext); */
