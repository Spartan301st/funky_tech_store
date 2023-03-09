
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./category.styles.jsx"

import ProductCard from "../../product-card/product-card.component";
import { CategoryProductsContainer, CategoryTitle } from "./category.styles.jsx";

import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../../store/categories/category.selector.js";
import Spinner from "../../spinner/spinner.component.jsx";

const Category = () => {
    const {category} = useParams();
    // Note that we fetch data async and it would cause an error in case if we don't build a safeguard for this condition
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);

    // to update products only if either category or categoriesMap changes
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {isLoading ? <Spinner/> : <CategoryProductsContainer> {products && products.map(product => <ProductCard key={product.id} product={product}/>)} </CategoryProductsContainer>}
            
        </>
    )
}

export default Category;