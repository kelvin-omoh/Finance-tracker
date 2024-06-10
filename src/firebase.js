import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6S8KuojlqawchVTpfF4xS0d89NXEKwlk",
  authDomain: "clone-372314.firebaseapp.com",
  projectId: "youtube-clone-372314",
  storageBucket: "youtube-clone-372314.appspot.com",
  messagingSenderId: "17067895440",
  appId: "1:17067895440:web:b73a360293294d60b38615",
  measurementId: "G-YDHPH9L3WG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
