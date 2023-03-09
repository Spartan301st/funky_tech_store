import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../../store/categories/category.selector";
import CategoryPreview from "../../category-preview/category-preview.component";
import Spinner from "../../spinner/spinner.component";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    return (
        <>
            { isLoading ? <Spinner/> : Object.keys(categoriesMap).map((categoryName) => <CategoryPreview key={categoryName} title={categoryName} products={categoriesMap[categoryName]}/>)}
        </>
    )
}

export default CategoriesPreview;