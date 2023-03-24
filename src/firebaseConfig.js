// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiw7dD9AKrsybp93CVX-1QfuA0myQJpy4",
  authDomain: "my-blog-4fe35.firebaseapp.com",
  projectId: "my-blog-4fe35",
  storageBucket: "my-blog-4fe35.appspot.com",
  messagingSenderId: "316340857618",
  appId: "1:316340857618:web:bc917e152bf542615561cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app)