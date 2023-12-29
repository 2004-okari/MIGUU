import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjfyKmLfMi-eWxZoQ5pZwpST7mKmnB6_c",
  authDomain: "miguu001-b4e63.firebaseapp.com",
  projectId: "miguu001-b4e63",
  storageBucket: "miguu001-b4e63.appspot.com",
  messagingSenderId: "438026763100",
  appId: "1:438026763100:web:fd37adbb0a13bdfb45df99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);