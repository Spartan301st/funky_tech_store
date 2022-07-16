// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcIMqUuNhc9youp8HVRGKrHGIHI_AwPs8",
  authDomain: "funky-tech-db.firebaseapp.com",
  projectId: "funky-tech-db",
  storageBucket: "funky-tech-db.appspot.com",
  messagingSenderId: "872987986165",
  appId: "1:872987986165:web:32d538131a7862c9c69dbc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  // args: database, collection, identifier(unique ID)
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if no given user is registered
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(`Error has occured while creating the user.`, err.message);
    }
  }

  // if the clause above was passed, menaing that the user was already registered with the google account
  return userDocRef;
};
