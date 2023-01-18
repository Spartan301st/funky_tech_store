import DirectoryItem from "../directory-item/directory-item.component"
import { AllCategContainer } from "./categories.styles.jsx"

const categories = [
  { 
    title: "Mobile Phones", 
    imgUrl: "/proj_imgs/phones.jpg", 
    route: "shop/smartphones" 
  },
  { 
    title: "Laptops", 
    imgUrl: "/proj_imgs/laptops.jpg", 
    route: "shop/laptops" 
  },
  { 
    title: "Desktops", 
    imgUrl: "/proj_imgs/desktops.jpg", 
    route: "shop/desktops" 
  },
  { 
    title: "Mouses", 
    imgUrl: "/proj_imgs/mouses.jpg", 
    route: "shop/mouses" 
  },
  { 
    title: "Headphones", 
    imgUrl: "/proj_imgs/headphones.jpg", 
    route: "shop/headphones" 
  },
];

const Categories = () => {
    return (
      <AllCategContainer>
        {categories.map((category, i) => (
          <DirectoryItem key={i} category={category} />
        ))}
      </AllCategContainer>
    )
}
export default Categories
