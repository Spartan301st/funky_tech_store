import {createContext, useState, useEffect} from 'react';
import { createUserDocFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';
// the actual val you want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});
// children components that we access values from
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocFromAuth(user)
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])
    // Provider is used to access the data from the children elements
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}