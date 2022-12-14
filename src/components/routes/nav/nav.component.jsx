import {useContext} from 'react'
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as FunkyLogo} from "../../../assets/logo5.svg"
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../../utils/firebase/firebase.utils';

import "./nav.styles.scss"
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';
const Navigation = () => {
  // const {currentUser, setCurrentUser} = useContext(UserContext);
  const {currentUser} = useContext(UserContext);
  const {dropdownVisibilityStatus} = useContext(CartDropdownContext);
  
  // const signOutHandler = async () => {
  //   // signing out the user and settign it to a null in context
  //   await signOutUser();
  //   setCurrentUser(null);
  // }

    return (
      <>
        <div className="nav">
          <Link className="logo-container" to="/">
            <FunkyLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">Shop</Link>
            {currentUser ? (
                // <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
                <span className="nav-link" onClick={signOutUser}>Sign Out</span>
              ) : (
              <Link className="nav-link" to="/auth">Sign In</Link>
              )
            }
            {/* <CartIcon onClick={() => setDropdownVisibilityStatus(!dropdownVisibilityStatus)}/> */}
            <CartIcon/>
          </div> 
          {dropdownVisibilityStatus && <CartDropdown/> }
        </div>
        <Outlet />
      </>
    );
};

export default Navigation;