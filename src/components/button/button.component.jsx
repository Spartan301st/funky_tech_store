import { BaseBtn, GoogleSignInBtn, InvertedBtn } from "./button.styles"
// btn types
export const BUTTON_TYPE_CLASSES = {
    base: "base",
    google: 'google-sign-in',
    inverted: 'inverted'
}

// will return the val of the buttonType passed to the function
const getBtn = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseBtn,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInBtn,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedBtn,
    }[buttonType]
)

const Button = ({children, buttonType, ...otherProps}) => {
    // we now have one of the styled buttons to be used
    const CustomBtn = getBtn(buttonType);
    return (
        <CustomBtn {...otherProps}
        >
            {children}
        </CustomBtn>
    )
}

export default Button;