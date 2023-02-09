import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const newArrayOfCartItems = [...cartItems];
  // find if cartItems contains productToAdd
  const cartItemIndex = newArrayOfCartItems.findIndex(
    (item) => item.id === productToAdd.id
  );
  // if yes then increment productToAdd's quantity
  cartItemIndex >= 0
    ? newArrayOfCartItems[cartItemIndex].quantity++
    : newArrayOfCartItems.push({ ...productToAdd, quantity: 1 });

  // // increase the total price
  // calcTotalSum(productToAdd.price)

  // return updated cartItems array
  return newArrayOfCartItems;
};
const removeCartItem = (cartItems, productToRemove) => {
  const newArrayOfCartItems = [...cartItems];
  const cartItemIndex = newArrayOfCartItems.findIndex(
    (item) => item.id === productToRemove.id
  );
  // remove item from the list
  newArrayOfCartItems.splice(cartItemIndex, 1);

  // // subtract product price * its quantity
  // calcTotalSum((-(productToRemove.price * newArrayOfCartItems[cartItemIndex]?.quantity)))

  // return updated cartItems array
  return newArrayOfCartItems;
};

const increaseDecreaseCartItemNumber = (cartItems, product, quantityOper) => {
  const newArrayOfCartItems = [...cartItems];
  // find if cartItems contains productToAdd
  const cartItemIndex = newArrayOfCartItems.findIndex(
    (item) => item.id === product.id
  );
  if (quantityOper === "increment") {
    newArrayOfCartItems[cartItemIndex].quantity++;
    // calcTotalSum(product.price);
  } else if (quantityOper === "decrement") {
    if (newArrayOfCartItems[cartItemIndex].quantity === 1) {
      newArrayOfCartItems.splice(cartItemIndex, 1);
    } else {
      newArrayOfCartItems[cartItemIndex].quantity--;
    }
    // calcTotalSum(-product.price);
  }
  return newArrayOfCartItems;
};

export const setDropdownVisibilityStatus = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_DROPDOWN_VISIBILITY, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  // updateCartItemsReducer(newCartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  // updateCartItemsReducer(newCartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const incrDecrCartItem = (cartItems, product, quantityOper) => {
  const newCartItems = increaseDecreaseCartItemNumber(
    cartItems,
    product,
    quantityOper
  );
  // updateCartItemsReducer(newCartItems);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
