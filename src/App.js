import "./categories.styles.scss";
import Categories from "./components/categories/categories.component";
const App = () => {
  const categories = [
    { title: "Mobile Phones", imgUrl: "/proj_imgs/phones.jpg" },
    { title: "Laptops", imgUrl: "/proj_imgs/laptops.jpg" },
    { title: "Desktops", imgUrl: "/proj_imgs/desktops.jpg" },
    { title: "Mouses", imgUrl: "/proj_imgs/mouses.jpg" },
    { title: "Headphones", imgUrl: "/proj_imgs/headphones.jpg" },
  ];
  return <Categories categories={categories} />;
};

export default App;
