import { CART_ACTION_TYPES } from "./cart.types";

// reducer starts
export const CART_INITIAL_STATE = {
  dropdownVisibilityStatus: false,
  cartItems: [],
  //   totalNumberOfItems: 0,
  //   totalPriceSum: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        // ...payload,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_DROPDOWN_VISIBILITY:
      return {
        ...state,
        dropdownVisibilityStatus: payload,
      };
    default:
      return state;
  }
};
