import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContext } from "../contexts/cart-dropdown.context";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const { cartItems} = useContext(CartDropdownContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {/* <div>{JSON.stringify(cartItems)}</div> */}
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
                
            </div>
            <Button>Head to Checkout</Button>
        </div>
    )
}
export default CartDropdown;