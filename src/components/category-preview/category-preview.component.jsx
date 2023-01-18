import { Link } from "react-router-dom"
import ProductCard from "../product-card/product-card.component"
import { CategoryItemsPreviewContainer, CategoryPreviewContainer, CategoryPreviewTitle } from "./category-preview.styles.jsx"

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            {/* <h2> */}
                <Link to={title}>
                    <CategoryPreviewTitle>{title.toUpperCase()}</CategoryPreviewTitle>
                </Link>
            {/* </h2> */}
            <CategoryItemsPreviewContainer>
                {
                    // only 1st 4 products for the given category
                    products
                    .filter((_, i) => i < 4)
                    .map((product) => 
                        <ProductCard key={product.id} product={product}/>
                    )
                }
            </CategoryItemsPreviewContainer>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview