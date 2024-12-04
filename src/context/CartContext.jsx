import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItem = (item,cantidad)=>{
        if(isInCart){

            const newCart = cart.map((prod)=>{
                if(prod.id===item.id){
                    return {...item,qty:prod.qty+cantidad}
                } else {
                    return prod
                }
            })
            //Actualizo el carrito
            setCart(newCart)
        }
        else {
        setCart([...cart,{...item, qty: cantidad}])
    }
}

    const isInCart = (id) => {
        return cart.some((item)=>{
            item.id ===id
        })
    }

    return (
        <CartContext.Provider value={{cart,addItem}}>
            {children}
        </CartContext.Provider>
    );
};

/* export const useCart = () => useContext(CartContext); */
