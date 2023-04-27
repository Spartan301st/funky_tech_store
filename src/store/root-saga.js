/** root saga; similar to root reducer, which combines different sagas under one */
import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";

import { userSagas } from "./user/user.saga";

// es6 generator function for root saga
export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
