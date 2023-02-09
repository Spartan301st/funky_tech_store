// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { CartContext } from "../../contexts/cart.context";
import { setDropdownVisibilityStatus } from "../../store/cart/cart.action";
import { selectIsDropdownVisible, selectTotalNumberOfItems } from "../../store/cart/cart.selector";
import { CartIconContainer, ItemCount, ShopBagIcon } from "./cart-icon.styles";

const CartIcon = () => {
    // const { dropdownVisibilityStatus, setDropdownVisibilityStatus, totalNumberOfItems} = useContext(CartContext);

    const dispatch = useDispatch()

    const totalNumberOfItems = useSelector(selectTotalNumberOfItems);
    const dropdownVisibilityStatus = useSelector(selectIsDropdownVisible);

    const toggleDDropdownVisibility = () => dispatch(setDropdownVisibilityStatus(!dropdownVisibilityStatus))
    
    return(
        <CartIconContainer onClick={toggleDDropdownVisibility}>
            <ShopBagIcon/>
            <ItemCount>{totalNumberOfItems}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;