import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyD_9ZKsH_tCmzw4XosrXvhc_MJKAo0hriM",
  authDomain: "guitaron-95a31.firebaseapp.com",
  projectId: "guitaron-95a31",
  storageBucket: "guitaron-95a31.firebasestorage.app",
  messagingSenderId: "873754060620",
  appId: "1:873754060620:web:929321bcec6d2f37f251e9"
};

// inicializamos los servicios de Firebase
const app = initializeApp(firebaseConfig);

// inicializamos la base de datos
export const db = getFirestore(app);
