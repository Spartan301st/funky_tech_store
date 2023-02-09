import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  // only time this runs is if the categoriesSlice obj we get from selectCategoryReducer is different
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      // object with the given key (title) = items array
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
// [],
//   (state) => {
// console.log("selector fired");
//   return state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     // object with the given key (title) = items array
//     acc[title.toLowerCase()] = items;
//     return acc;
// };
