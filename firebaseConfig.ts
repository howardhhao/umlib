import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnz3WYRBfVVvI_B5IzqkG1usM4zLeOCJk",
  authDomain: "umlib-917ca.firebaseapp.com",
  projectId: "umlib-917ca",
  storageBucket: "umlib-917ca.firebasestorage.app",
  messagingSenderId: "120454181172",
  appId: "1:120454181172:web:900a5f6f1bf1189a25b561",
  measurementId: "G-GVH01MPTBH"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
