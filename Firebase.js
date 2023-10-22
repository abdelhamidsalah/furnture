
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCJss8p7g-hR4ezt3U1V2QhUXZpUkYxPi4",
  authDomain: "multimart-a510c.firebaseapp.com",
  projectId: "multimart-a510c",
  storageBucket: "multimart-a510c.appspot.com",
  messagingSenderId: "195276193460",
  appId: "1:195276193460:web:40d817f13a6efbce2b61e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app