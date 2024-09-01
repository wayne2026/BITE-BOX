/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
    const [total, setTotal] = useState(0)
    const [allFood,setAllFood] = useState([])
    useEffect(()=>{
        let newTotal = 0;
        allFood.forEach((items) => {
            if (cartItems[items._id] > 0) {
                newTotal += items.price * cartItems[items._id];
            }
        });
        setTotal(newTotal);

    },[cartItems,allFood])
    



    const addToCart = (itemsId) => {
        if (!cartItems[itemsId]) {
            setCartItems((prev) => ({ ...prev, [itemsId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] + 1 }))
        }
    }

    const removeFromCart = (itemsId) => {
        setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] - 1 }))
    }
    const contextValue = {
        addToCart,
        setCartItems,
        removeFromCart,
        cartItems,
        total,
        setAllFood,
        allFood
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider