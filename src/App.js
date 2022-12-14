import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/nav/nav.component";
import Authentication from "./components/routes/authentication/authentication.component";

import Shop from "./components/routes/shop/shop.component";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY2MjM1NDgyNiwiZXhwIjoxNjYyMzU4NDI2fQ.nKt5S8vFfdWkaT3NQVi-YQrNOecFmtvfBu29AuA1MBw";

// /* providing token in bearer */
// const metadata = {
//   method: "GET" /* or POST/PUT/PATCH/DELETE */,
//   headers: {
//     Authorization: `Bearer ${token}`,
//     "Content-Type": "application/json",
//   },
// };
// const endpoint1 = "https://dummyjson.com/auth/products/category/smartphones";
// const endpoint2 = "https://dummyjson.com/auth/products/category/laptops";

// const phonesList = [];
// const laptopsList = [];

// async function fetchPhones() {
//   const response1 = await fetch(endpoint1, metadata);
//   const phones = await response1.json();
//   // console.log(phones);
//   phonesList.push(...phones.products);
// }
// async function fetchLaptops() {
//   const response2 = await fetch(endpoint2, metadata);
//   const laptops = await response2.json();
//   laptopsList.push(...laptops.products);
//   // console.log(laptopsList);
// }
// fetchPhones();
// fetchLaptops();

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Navigation />}>
        {/* <Route path="home" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
