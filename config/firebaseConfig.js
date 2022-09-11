import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhK1-aL_qxQYiCI9ZLxyVM32ICcTm6kug",
  authDomain: "jewellery-store-d0492.firebaseapp.com",
  projectId: "jewellery-store-d0492",
  storageBucket: "jewellery-store-d0492.appspot.com",
  messagingSenderId: "360841897972",
  appId: "1:360841897972:web:bcb038cb3bb2b876ac7ba1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore();