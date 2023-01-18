import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';

import { AuthContainer } from './authentication.styles';

const Authentication = () => {
    return (
        <AuthContainer>
            <SignInForm/>
            <SignUpForm/>
        </AuthContainer>
    )
}

export default Authentication;