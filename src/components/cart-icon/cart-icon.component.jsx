import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingBagIcon} from "../../assets/shopping-bag.svg"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { dropdownVisibilityStatus, setDropdownVisibilityStatus, totalNumberOfItems} = useContext(CartContext);
    const toggleDDropdownVisibility = () => setDropdownVisibilityStatus(!dropdownVisibilityStatus)
    return(
        <div className="cart-icon-container" onClick={toggleDDropdownVisibility}>
            <ShoppingBagIcon className="shopping-icon"/>
            <span className="item-count">{totalNumberOfItems}</span>
        </div>
    )
}

export default CartIcon;