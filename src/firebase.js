import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAMZZjeQuT504cbSQcZdyeGNH3aZEOVDHw",
  authDomain: "fir-auth-1132-56b37.firebaseapp.com",
  projectId: "fir-auth-1132-56b37",
  storageBucket: "fir-auth-1132-56b37.appspot.com",
  messagingSenderId: "249677933303",
  appId: "1:249677933303:web:d9de288ca30535b03941f2",
  measurementId: "G-WLXYTKXXL5"
};

const app = initializeApp(firebaseConfig);

const auth= getAuth();

export{app,auth};