import {useContext} from "react"
import {CategoriesContext} from "../../../contexts/categories.context"
import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <>
            {Object.keys(categoriesMap).map((categoryName) => 
                <CategoryPreview key={categoryName} title={categoryName} products={categoriesMap[categoryName]}/>
            )}
        </>
    )
}

export default CategoriesPreview;