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
import thunk from "redux-thunk";

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

// persisting reducer to which we pass our persisting configuration and root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// filter out by a boolean, meaning that only truthy values are counted
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
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

// persistor calling persistStore function
export const persistor = persistStore(store);
