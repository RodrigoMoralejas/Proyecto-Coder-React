import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjHJ8aL4ZFGW6RlsFsmDXXxbcBydZfvCU",
  authDomain: "react-coder-e12cd.firebaseapp.com",
  projectId: "react-coder-e12cd",
  storageBucket: "react-coder-e12cd.appspot.com",
  messagingSenderId: "700000020504",
  appId: "1:700000020504:web:a02fbfc7844c1c16bcbb6d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
