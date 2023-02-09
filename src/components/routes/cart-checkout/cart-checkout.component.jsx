// import { useContext } from "react"
// import { CartContext } from "../../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartPriceSum } from "../../../store/cart/cart.selector";
import CartCheckoutItem from "../../cart-checkout-item/cart-checkout-item.component";
import "./cart-checkout.styles.jsx"
import { CheckoutItemContainer, CheckoutItemsContainer, CheckoutItemsHeader, CheckoutItemsHeadersContainer, CheckoutItemsTotalPrice } from "./cart-checkout.styles.jsx";


const CartCheckout = () => {
    // const {cartItems, totalPriceSum} = useContext(CartContext);
    const cartItems = useSelector(selectCartItems)
    const totalPriceSum = useSelector(selectCartPriceSum)
    return (
        cartItems.length > 0 
            ? <CheckoutItemsContainer>
                <CheckoutItemsHeadersContainer>
                    <CheckoutItemsHeader>Product</CheckoutItemsHeader>
                    <CheckoutItemsHeader>Description</CheckoutItemsHeader>
                    <CheckoutItemsHeader>Quantity</CheckoutItemsHeader>
                    <CheckoutItemsHeader>Price</CheckoutItemsHeader>
                    <CheckoutItemsHeader>Remove</CheckoutItemsHeader>
                </CheckoutItemsHeadersContainer>
                <CheckoutItemContainer>
                    {cartItems.map(cartItem => 
                        <CartCheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )}
                </CheckoutItemContainer>
                <CheckoutItemsTotalPrice>Total: $ {totalPriceSum}</CheckoutItemsTotalPrice>
            </CheckoutItemsContainer>
            : <h2>Cart is empty</h2>
    )
}

export default CartCheckout