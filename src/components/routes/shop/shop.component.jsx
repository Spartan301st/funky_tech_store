import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
// import { getCategoriesAndDocs } from "../../../utils/firebase/firebase.utils";
import { fetchCategoriesAsync } from "../../../store/categories/category.action";

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // const getCategoriesMap = async () => {
        //     // const categoryMap = await getCategoriesAndDocs("categories");
        //     // dispatch(setCategoriesMap(categoryMap))

        //     // const categoriesArray = await getCategoriesAndDocs("categories");
        //     // dispatch(setCategories(categoriesArray))
            
        // }
        // getCategoriesMap();
        dispatch(fetchCategoriesAsync())
    }, [])
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default Shop;