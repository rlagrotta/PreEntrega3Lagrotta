import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const prodFromLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(prodFromLocalStorage);

    useEffect(() => {
        if (cart !== prodFromLocalStorage) {
            localStorage.setItem("carrito", JSON.stringify(cart));
        }
    }, [cart]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const newCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...item, qty: prod.qty + cantidad };
                } else {
                    return prod;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, { ...item, qty: cantidad }]);
        }
    };

    const isInCart = (id) => cart.some((item) => item.id === id);

    const clear = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const cartTotal = () => {
        return parseFloat(cart.reduce((acc, prod) => acc + (prod.price || 0) * (prod.qty || 0), 0).toFixed(2));
    };

    const cartQty = () => {
        return cart.reduce((acc, prod) => acc + (prod.qty || 0), 0);
    };

    const itemQuantity = (id) => {
        const itemInCart = cart.find((prod) => prod.id === id);
        return itemInCart ? itemInCart.qty : 0;
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                clear,
                removeItem,
                cartTotal,
                cartQty,
                itemQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

/* export const useCart = () => useContext(CartContext); */
