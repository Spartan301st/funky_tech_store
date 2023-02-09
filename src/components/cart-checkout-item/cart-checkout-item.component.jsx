// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { incrDecrCartItem, removeItemFromCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import "./cart-checkout-item.styles.jsx";
import { ArrowIconLeft, ArrowIconRight, CartCheckoutItemContainer, CartItemDescription, CartItemImg, CartItemImgContainer, CartItemQty, CartItemQuantityContainer, CartItemRemoveBtn, IncrDecrBtn, PriceContainer, RemoveBtnContainer, RemoveIconStyled } from "./cart-checkout-item.styles.jsx";

const CartCheckoutItem = ({cartItem}) => {
    const {imageUrl, quantity, price, name} = cartItem;
    const cartItems = useSelector(selectCartItems);
    // const {incrDecrCartItem, removeItemFromCart} = useContext(CartContext);
    const dispatch = useDispatch();

    // const incrDecrHandler = (cartItem, operation) => incrDecrCartItem(cartItem, operation);
    // const removeHandler = (cartItem) => removeItemFromCart(cartItem);
    const incrDecrHandler = (cartItem, operation) => dispatch(incrDecrCartItem(cartItems, cartItem, operation));
    const removeHandler = (cartItem) => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CartCheckoutItemContainer>
            <CartItemImgContainer>
                <CartItemImg src={imageUrl} alt={name} />
            </CartItemImgContainer>
            <CartItemDescription>{name}</CartItemDescription>
            <CartItemQuantityContainer>
                <IncrDecrBtn onClick={() => incrDecrHandler(cartItem, "decrement")}>
                    <ArrowIconLeft/>
                </IncrDecrBtn>
                <CartItemQty>{quantity}</CartItemQty>
                <IncrDecrBtn onClick={() => incrDecrHandler(cartItem, "increment")}>
                    <ArrowIconRight/>
                </IncrDecrBtn>
            </CartItemQuantityContainer>
            <PriceContainer>{price}</PriceContainer>
            <RemoveBtnContainer>
                <CartItemRemoveBtn onClick={() => removeHandler(cartItem)}>
                    <RemoveIconStyled/>
                </CartItemRemoveBtn>
            </RemoveBtnContainer>
        </CartCheckoutItemContainer>
    )
}

export default CartCheckoutItem;