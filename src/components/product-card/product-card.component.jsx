import { useContext } from "react";
import { CartDropdownContext } from "../contexts/cart-dropdown.context";

import Button from "../button/button.component";
import "./product-card.styles.scss"

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartDropdownContext);
    const { name, imageUrl, price} = product;

    const addProductToCart = () => addItemToCart(product)
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer important-text">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}
export default ProductCard;