import { Outlet, Link } from "react-router-dom";
import {ReactComponent as FunkyLogo} from "../../../assets/logo5.svg"
import "./nav.styles.scss"
const Navigation = () => {
    return (
      <>
        <div className="nav">
          <Link className="logo-container" to="/">
            <FunkyLogo className="logo"/>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">Shop</Link>
            <Link className="nav-link" to="/auth">Sign In</Link>
          </div>
        </div>
        <Outlet />
      </>
    );
};

export default Navigation;