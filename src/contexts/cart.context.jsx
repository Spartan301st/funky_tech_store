import { createContext, useEffect, useState } from "react";
// let calcTotalSum = () => {};
// const calculateTotalSum = (totalPriceSum, itemPriceToBeAddedOrRemoved) => {
//     return Number((totalPriceSum + itemPriceToBeAddedOrRemoved).toFixed(2))
// }

const addCartItem = (cartItems, productToAdd) => {
    const newArrayOfCartItems = [...cartItems]
    // find if cartItems contains productToAdd
    const cartItemIndex = newArrayOfCartItems.findIndex((item) => item.id === productToAdd.id);
    // if yes then increment productToAdd's quantity
    cartItemIndex >= 0
        ? newArrayOfCartItems[cartItemIndex].quantity++ 
        : newArrayOfCartItems.push({...productToAdd, quantity: 1});
    
    // // increase the total price
    // calcTotalSum(productToAdd.price)

    // return updated cartItems array
    return newArrayOfCartItems;
}
const removeCartItem = (cartItems, productToRemove) => {
    const newArrayOfCartItems = [...cartItems]
    const cartItemIndex = newArrayOfCartItems.findIndex((item) => item.id === productToRemove.id);
    // remove item from the list
    newArrayOfCartItems.splice(cartItemIndex, 1);
    
    // // subtract product price * its quantity
    // calcTotalSum((-(productToRemove.price * newArrayOfCartItems[cartItemIndex]?.quantity)))

    // return updated cartItems array
    return newArrayOfCartItems;
}

const increaseDecreaseCartItemNumber = (cartItems, product, quantityOper) => {
    const newArrayOfCartItems = [...cartItems];
    // find if cartItems contains productToAdd
    const cartItemIndex = newArrayOfCartItems.findIndex((item) => item.id === product.id);
    if(quantityOper === "increment") {
        newArrayOfCartItems[cartItemIndex].quantity++
        // calcTotalSum(product.price);
    } else if(quantityOper === "decrement") {
        if(newArrayOfCartItems[cartItemIndex].quantity === 1) {
            newArrayOfCartItems.splice(cartItemIndex, 1);
        } else {
            newArrayOfCartItems[cartItemIndex].quantity--;
        }
        // calcTotalSum(-product.price);
    }
    return newArrayOfCartItems;
}

export const CartContext = createContext({
    dropdownVisibilityStatus: false,
    setDropdownVisibilityStatus:() => {},
    cartItems: [],
    addItemToCart: () => {},
    incrDecrCartItem: () => {},
    removeItemFromCart: () => {},
    totalNumberOfItems: 0,
    // calcTotalSum: () => {}
})

export const CartProvider = ({children}) => {
    const [dropdownVisibilityStatus, setDropdownVisibilityStatus] = useState(false)

    // used with addItemToCart, incrDecrCartItem and
    const [cartItems, setCartItems] = useState([])
    const [totalNumberOfItems, setTotalNumberOfItems] = useState(0);
    const [totalPriceSum, setTotalPriceSum] = useState(0);

    useEffect(() => {
        const newTotalNumberOfItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
        setTotalNumberOfItems(newTotalNumberOfItems)
    }, [cartItems])

    useEffect(() => {
        const newTotalPriceSum = Number(cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2))
        setTotalPriceSum(newTotalPriceSum)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }
    const incrDecrCartItem = (product, quantityOper) => {
        setCartItems(increaseDecreaseCartItemNumber(cartItems, product, quantityOper));
    }
    // calcTotalSum = (itemPriceToBeAddedOrRemoved) => {
    //     setTotalPriceSum(calculateTotalSum(totalPriceSum, itemPriceToBeAddedOrRemoved))
    // }
    const value = {dropdownVisibilityStatus, setDropdownVisibilityStatus, addItemToCart, cartItems, totalNumberOfItems, incrDecrCartItem, removeItemFromCart, totalPriceSum}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}