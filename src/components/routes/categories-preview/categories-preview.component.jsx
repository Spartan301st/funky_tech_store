import {useContext} from "react"
import {CategoriesContext} from "../../../contexts/categories.context"
import CategoryPreview from "../../category-preview/category-preview.component";
import "./categories-preview.styles.scss"

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <>
        {/* <div className="category-preview-container"> */}
            {Object.keys(categoriesMap).map((categoryName) => 
                <CategoryPreview key={categoryName} title={categoryName} products={categoriesMap[categoryName]}/>
            )}
        {/* </div> */}
        </>
    )
}

export default CategoriesPreview;