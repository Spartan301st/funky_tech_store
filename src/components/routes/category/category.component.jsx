
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./category.styles.scss"

import { CategoriesContext } from "../../../contexts/categories.context";
import ProductCard from "../../product-card/product-card.component";

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
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </>
    )
}

export default Category;