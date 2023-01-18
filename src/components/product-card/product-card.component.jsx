import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { AddToCardBtn, ProductCardContainer, ProductCardFooter, ProductCardImg, ProductCardProdName, ProductCardProdPrice } from "./product-card.styles.jsx";

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext);
    const { name, imageUrl, price} = product;

    const addProductToCart = () => addItemToCart(product)
    return (
        <ProductCardContainer>
            <ProductCardImg src={imageUrl} alt={name} />
            <ProductCardFooter className="important-text">
                <ProductCardProdName>{name}</ProductCardProdName>
                <ProductCardProdPrice>{price}</ProductCardProdPrice>
            </ProductCardFooter>
            <AddToCardBtn buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</AddToCardBtn>
        </ProductCardContainer>
    )
}

export default ProductCard;
