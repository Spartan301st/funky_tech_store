import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

// TODO: CHECK THE DATA PASSED IN
export const selectCartItems = createSelector(
  [selectCartReducer],
  // (cart) => cart.items
  (cart) => cart.cartItems
);

export const selectIsDropdownVisible = createSelector(
  [selectCartReducer],
  (cart) => cart.dropdownVisibilityStatus
  // (cart) => cart.isDropdownVisible
);

export const selectTotalNumberOfItems = createSelector(
  [selectCartItems],
  (newCartItems) => newCartItems.reduce((acc, item) => acc + item.quantity, 0)
);
export const selectCartPriceSum = createSelector(
  [selectCartItems],
  (newCartItems) =>
    newCartItems
      .reduce((acc, item) => acc + item.quantity * item.price, 0)
      .toFixed(2)
);

// const newTotalNumberOfItems = newCartItems.reduce(
//   (acc, item) => acc + item.quantity,
//   0
// );
// calc total price amount for the items
// const newTotalPriceSum = Number(
//   newCartItems
//     .reduce((acc, item) => acc + item.quantity * item.price, 0)
//     .toFixed(2)
// );
