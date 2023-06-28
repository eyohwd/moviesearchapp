import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "mymovie-search.firebaseapp.com",
  projectId: "mymovie-search",
  storageBucket: "mymovie-search.appspot.com",
  messagingSenderId: "707293861350",
  appId: "1:707293861350:web:04647798d3a91a1c4ff227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
