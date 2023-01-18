import { Outlet } from "react-router-dom";
import Categories from "../../../components/categories/categories.component";
const Home = () => {
  
  return (
    <>
      <Categories />
      <Outlet/>
    </>
  );
  
};

export default Home;