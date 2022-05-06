import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'

const initializeAppAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializeAppAuth;