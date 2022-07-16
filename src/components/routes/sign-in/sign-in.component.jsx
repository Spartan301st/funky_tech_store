import {useEffect} from 'react'
import {getRedirectResult} from 'firebase/auth'
import {auth, signInWithGooglePopup, createUserDocFromAuth, signInWithGoogleRedirect} from '../../../utils/firebase/firebase.utils'
const SignIn = () => {

    useEffect( () => {
        async function authRes(){
            const response = await getRedirectResult(auth);
            if(response) {
                const userDocRef = await createUserDocFromAuth(response.user)
            }
        }
        authRes();
        
    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user)
    }
    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log(user);
    // }
    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>
        </div>
    )
}

export default SignIn