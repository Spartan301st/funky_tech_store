import { useContext } from "react"
import { CartContext } from "../../../contexts/cart.context";
import CartCheckoutItem from "../../cart-checkout-item/cart-checkout-item.component";
import "./cart-checkout.styles.scss"


const CartCheckout = () => {
    const {cartItems, totalPriceSum} = useContext(CartContext);
    return (
        cartItems.length > 0 
            ? <div className="cart-items-container">
                <div className="cart-items-headers">
                    <span>Product</span>
                    <span>Description</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Remove</span>
                </div>
                <div className="cart-items">
                    {cartItems.map(cartItem => 
                        <CartCheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )}
                </div>
                <div className="cart-items-total-price">Total: $ {totalPriceSum}</div>
            </div>
            : <h2 className="cart-empty">Cart is empty</h2>
    )
}

export default CartCheckout