import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShopBagIcon } from "./cart-icon.styles";

const CartIcon = () => {
    const { dropdownVisibilityStatus, setDropdownVisibilityStatus, totalNumberOfItems} = useContext(CartContext);
    const toggleDDropdownVisibility = () => setDropdownVisibilityStatus(!dropdownVisibilityStatus)
    return(
        <CartIconContainer onClick={toggleDDropdownVisibility}>
            <ShopBagIcon/>
            <ItemCount>{totalNumberOfItems}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;