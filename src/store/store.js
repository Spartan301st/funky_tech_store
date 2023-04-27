import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
// import thunk from "redux-thunk";
// saga replacing thunk, as we need only one async state management lib
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";

// configuring redux store persistence
const persistConfig = {
  // persist in root level/the entire project is captured
  key: "root",
  // persistence in local storage
  storage,
  // blacklisting the reducers
  // as user comes from firebase storage
  // blacklist: ["user"],
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

// persisting reducer to which we pass our persisting configuration and root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// filter out by a boolean, meaning that only truthy values are counted
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean);

// either use redux devtools or basic compose
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
// as saga middleware gets instantiated in the above store, we tell it to run the middleware with a root saga
sagaMiddleware.run(rootSaga);

// persistor calling persistStore function
export const persistor = persistStore(store);
