import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/category.selector";
import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    return (
        <>
            {Object.keys(categoriesMap).map((categoryName) => 
                <CategoryPreview key={categoryName} title={categoryName} products={categoriesMap[categoryName]}/>
            )}
        </>
    )
}

export default CategoriesPreview;