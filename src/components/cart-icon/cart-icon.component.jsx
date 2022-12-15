import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingBagIcon} from "../../assets/shopping-bag.svg"
import { useContext } from "react";
import { CartDropdownContext } from "../contexts/cart-dropdown.context";

const CartIcon = () => {
    const { dropdownVisibilityStatus, setDropdownVisibilityStatus, totalNumberOfItems} = useContext(CartDropdownContext);
    const toggleDDropdownVisibility = () => setDropdownVisibilityStatus(!dropdownVisibilityStatus)
    return(
        <div className="cart-icon-container" onClick={toggleDDropdownVisibility}>
            <ShoppingBagIcon className="shopping-icon"/>
            <span className="item-count">{totalNumberOfItems}</span>
        </div>
    )
}

export default CartIcon;