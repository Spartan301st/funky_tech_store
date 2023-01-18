import {useContext} from 'react'
import { Outlet } from "react-router-dom";

import {ReactComponent as FunkyLogo} from "../../../assets/logo5.svg"
import { UserContext } from '../../../contexts/user.context';

import { signOutUser } from '../../../utils/firebase/firebase.utils';

import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../../contexts/cart.context';

// using styled components
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./nav.styles"
const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {dropdownVisibilityStatus} = useContext(CartContext);

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
          {dropdownVisibilityStatus && <CartDropdown/> }
        </NavigationContainer>
        <Outlet />
      </>
    );
};

export default Navigation;