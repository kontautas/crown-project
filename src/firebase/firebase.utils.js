import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDcWsEq-oLoksoMlLtNKGVwyTSWgUVTG2w",
    authDomain: "crown-db-9a367.firebaseapp.com",
    databaseURL: "https://crown-db-9a367.firebaseio.com",
    projectId: "crown-db-9a367",
    storageBucket: "",
    messagingSenderId: "1049496955902",
    appId: "1:1049496955902:web:ad96479ec28e6452"
};

export const createUserProfileDocument = async (userAuth, data) => {
    if(!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            })
        } catch(error){
            console.log(`error creating user - ${error}`);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;