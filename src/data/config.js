import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvhZbYyGjK3RwLon2RVY5FO3WFLA58UfA",
  authDomain: "retro-store-34a41.firebaseapp.com",
  projectId: "retro-store-34a41",
  storageBucket: "retro-store-34a41.appspot.com",
  messagingSenderId: "622571254748",
  appId: "1:622571254748:web:115ef770d5e3ae55051519",
  measurementId: "G-QC2WYMZD5B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);