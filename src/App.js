import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/nav/nav.component";
import Authentication from "./components/routes/authentication/authentication.component";

import Shop from "./components/routes/shop/shop.component";
import CartCheckout from "./components/routes/cart-checkout/cart-checkout.component";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
      // const result = setCurrentUser(user);
      // console.log("result", result);
      // dispatch();
    });

    return unsubscribe;
  }, []); // don't pay attention to warning msg as dispatch never changes

  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Navigation />}>
        {/* <Route path="home" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CartCheckout />} />
      </Route>
    </Routes>
  );
};

export default App;
