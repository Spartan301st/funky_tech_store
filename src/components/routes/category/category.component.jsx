
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./category.styles.jsx"

import { CategoriesContext } from "../../../contexts/categories.context";
import ProductCard from "../../product-card/product-card.component";
import { CategoryProductsContainer, CategoryTitle } from "./category.styles.jsx";

const Category = () => {
    const {category} = useParams();
    // Note that we fetch data async and it would cause an error in case if we don't build a safeguard for this condition
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    // to update products only if either category or categoriesMap changes
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryProductsContainer>
                {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
            </CategoryProductsContainer>
        </>
    )
}

export default Category;