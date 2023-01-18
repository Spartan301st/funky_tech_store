import { CartItemContainer, CartItemImg, CartItemImgContainer, ItemDetails, ItemName, ItemPrice } from "./cart-item.styles";

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CartItemContainer>
            <CartItemImgContainer>
                <CartItemImg src={imageUrl} alt={name} />
            </CartItemImgContainer>
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <ItemPrice>{quantity} x ${price}</ItemPrice>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;