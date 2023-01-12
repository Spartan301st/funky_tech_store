import { Link } from "react-router-dom"
import ProductCard from "../product-card/product-card.component"
import "./category-preview.styles.scss"

const CategoryPreview = ({title, products}) => {
    return (
        <div className="category-preview-container">
            <h2>
                <Link className="" to={title}>
                    <span className="title">{title.toUpperCase()}</span>
                </Link>
            </h2>
            <div className="preview">
                {
                    // only 1st 4 products fo the given category
                    products
                    .filter((_, i) => i < 4)
                    .map((product) => 
                        <ProductCard key={product.id} product={product}/>
                    )
                }
            </div>
        </div>
    )
}

export default CategoryPreview