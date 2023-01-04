import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
    const navigate = useNavigate();
    const routeChange = (path) =>{
        navigate(path);
    }

    const { cartItems} = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
            </div>
            <div className="cart-dropdown-btn-container">
                <Button onClick={() => routeChange("checkout")}>Head to Checkout</Button>
            </div>
        </div>
    )
}
export default CartDropdown;