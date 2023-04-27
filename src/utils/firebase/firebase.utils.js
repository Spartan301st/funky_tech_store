// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocs = async (collectionKey, objsToAdd) => {
  // transaction - a successful unit of work
  const collectionRef = collection(db, collectionKey);
  // batch
  const batch = writeBatch(db);
  // we attach CRUD operations to the batch
  // 5 different shop_object categories with corresp. data
  objsToAdd.forEach((object) => {
    // reference to the doc
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // to write new data to the batch
    batch.set(docRef, object);
  });

  // fire writing process
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(db, "categories");
  // get a query
  const q = query(collectionRef);
  // take a snapshot of the query
  const querySnapshot = await getDocs(q);
  // use that snapshot
  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   // object with the given key (title) = items array
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});
  // return categoryMap;
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
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
        ...additionalInfo,
      });
    } catch (err) {
      console.log(`Error has occured while creating the user.`, err.message);
    }
  }

  // if the clause above was passed, menaing that the user was already registered with the google account
  // return userDocRef;
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
