import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBsk7mDOpJ7oW6Nw_1evNg2kkQ7OjaeJSk",
  authDomain: "zentavos-9c194.firebaseapp.com",
  projectId: "zentavos-9c194",
  storageBucket: "zentavos-9c194.firebasestorage.app",
  messagingSenderId: "659786103782",
  appId: "1:659786103782:web:7f3c01ce7099228128f427",
  measurementId: "G-JSR165EF6D"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db};