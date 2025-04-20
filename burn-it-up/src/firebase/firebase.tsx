
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDqvEMH4kNpXFyDwhzQ710XQ_iThyaYs4s",
  authDomain: "burnitup-70c68.firebaseapp.com",
  projectId: "burnitup-70c68",
  storageBucket: "burnitup-70c68.appspot.com",
  messagingSenderId: "871981777297",
  appId: "1:871981777297:web:6c6c5a672c7fe726331a30",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;
