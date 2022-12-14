import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    dropdownVisibilityStatus: false,
    setDropdownVisibilityStatus:() => {}
})

export const CartDropdownProvider = ({children}) => {
    const [dropdownVisibilityStatus, setDropdownVisibilityStatus] = useState(false)
    const value = {dropdownVisibilityStatus, setDropdownVisibilityStatus}

    return (
        <CartDropdownContext.Provider value={value}>
            {children}
        </CartDropdownContext.Provider>
    )
}