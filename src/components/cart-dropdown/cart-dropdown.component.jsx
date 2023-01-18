import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { CartDropdownBtnContainer, CartDropdownContainer, CartEmptyMsg, CartItemsContainer, HeadToCheckoutBtn } from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const navigate = useNavigate();
    const routeChange = (path) =>{
        navigate(path);
    }

    const { cartItems} = useContext(CartContext);

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length
                ? (cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>))
                : (<CartEmptyMsg>Cart is empty</CartEmptyMsg>)
                }
            </CartItemsContainer>
            <CartDropdownBtnContainer>
                <HeadToCheckoutBtn onClick={() => routeChange("checkout")}>Head to Checkout</HeadToCheckoutBtn>
            </CartDropdownBtnContainer>
        </CartDropdownContainer>
    )
}
export default CartDropdown;