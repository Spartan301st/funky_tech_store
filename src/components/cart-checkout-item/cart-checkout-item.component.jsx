import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-checkout-item.styles.scss"
import {ReactComponent as ArrowIcon} from "../../assets/arrow-icon.svg"
import {ReactComponent as RemoveIcon} from "../../assets/remove-icon.svg"

const CartCheckoutItem = ({cartItem}) => {
    const {imageUrl, quantity, price, name} = cartItem;
    const {incrDecrCartItem, removeItemFromCart} = useContext(CartContext);

    const incrDecrHandler = (cartItem, operation) => incrDecrCartItem(cartItem, operation);
    const removeHandler = (cartItem) => removeItemFromCart(cartItem);

    return (
        <div className="cart-checkout-item-container">
            <div className="cart-item-img-container">
                <img className="cart-item-img" src={imageUrl} alt={name} />
            </div>
            <div className="cart-item-description">{name}</div>
            <div className="cart-item-quantity-container">
                <button className="incr-decr-btn decr-btn" onClick={() => incrDecrHandler(cartItem, "decrement")}>
                    {/* <img src="/src/assets/arrow-icon.svg" alt="" /> */}
                    <ArrowIcon className="arrow-icon arrow-left"/>
                </button>
                <span className="cart-item-quantity">{quantity}</span>
                <button type="button" className="incr-decr-btn incr-btn" onClick={() => incrDecrHandler(cartItem, "increment")}>
                    <ArrowIcon className="arrow-icon arrow-right"/>
                </button>
            </div>
            <div className="cart-item-price">{price}</div>
            <div className="cart-item-remove-btn-container">
                <button type="button" className="cart-item-remove" onClick={() => removeHandler(cartItem)}>
                    <RemoveIcon className="remove-icon"/>
                </button>
            </div>
            

        </div>
    )
}

export default CartCheckoutItem;