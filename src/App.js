import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/nav/nav.component";
import Authentication from "./components/routes/authentication/authentication.component";

import Shop from "./components/routes/shop/shop.component";
import CartCheckout from "./components/routes/cart-checkout/cart-checkout.component";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Navigation />}>
        {/* <Route path="home" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CartCheckout />} />
      </Route>
    </Routes>
  );
};

export default App;
