import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const newArrayOfCartItems = [...cartItems]
    // find if cartItems contains productToAdd
    const cartItemIndex = newArrayOfCartItems.findIndex((item) => item.id === productToAdd.id);
    // if yes then increment productToAdd's quantity
    cartItemIndex >= 0
        ? newArrayOfCartItems[cartItemIndex].quantity++ 
        : newArrayOfCartItems.push({...productToAdd, quantity: 1});

    // return updated cartItems array
    return newArrayOfCartItems;
}

export const CartDropdownContext = createContext({
    dropdownVisibilityStatus: false,
    setDropdownVisibilityStatus:() => {},
    cartItems: [],
    addItemToCart: () => {},
    totalNumberOfItems: 0
})

export const CartDropdownProvider = ({children}) => {
    const [dropdownVisibilityStatus, setDropdownVisibilityStatus] = useState(false)

    const [cartItems, setCartItems] = useState([])
    const [totalNumberOfItems, setTotalNumberOfItems] = useState(0);

    useEffect(() => {
        const newTotalNumberOfItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
        setTotalNumberOfItems(newTotalNumberOfItems)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const value = {dropdownVisibilityStatus, setDropdownVisibilityStatus, addItemToCart, cartItems, totalNumberOfItems}

    return (
        <CartDropdownContext.Provider value={value}>
            {children}
        </CartDropdownContext.Provider>
    )
}