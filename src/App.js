import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/nav/nav.component";
import SignIn from "./components/routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>Shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Navigation />}>
        {/* <Route path="home" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
