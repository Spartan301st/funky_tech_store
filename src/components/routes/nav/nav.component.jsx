// import {useContext} from 'react'
import { Outlet } from "react-router-dom";

import {ReactComponent as FunkyLogo} from "../../../assets/logo5.svg"

// import { signOutUser } from '../../../utils/firebase/firebase.utils';

import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
// import { CartContext } from '../../../contexts/cart.context';

// using styled components
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./nav.styles"
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../store/user/user.selector';
import { selectIsDropdownVisible } from "../../../store/cart/cart.selector";
import { signOutStart } from "../../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch()
  // const {currentUser} = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser)
  // const {dropdownVisibilityStatus} = useContext(CartContext);
  const isDropdownVisible = useSelector(selectIsDropdownVisible);

  const signOutUser = () => dispatch(signOutStart())
    return (
      <>
        <NavigationContainer>
          <LogoContainer to="/">
            <FunkyLogo className="logo"/>
          </LogoContainer>
          <NavLinks>
            <NavLink to="/shop">Shop</NavLink>
            {currentUser ? (
                <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink>
              ) : (
              <NavLink to="/auth">Sign In</NavLink>
              )
            }
            <CartIcon/>
          </NavLinks> 
          {isDropdownVisible && <CartDropdown/> }
        </NavigationContainer>
        <Outlet />
      </>
    );
};

export default Navigation;