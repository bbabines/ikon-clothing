import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBjZm0l0oSnPWs7mRYOJS3WaCK5MvtCpOI",
	authDomain: "crwn-clothing-db-a9337.firebaseapp.com",
	projectId: "crwn-clothing-db-a9337",
	storageBucket: "crwn-clothing-db-a9337.appspot.com",
	messagingSenderId: "946195811801",
	appId: "1:946195811801:web:2f6c10a9301bc5f8de1dc8",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapShop = await getDoc(userDocRef);
};
