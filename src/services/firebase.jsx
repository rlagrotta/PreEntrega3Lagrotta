import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCau3GyEvhS9pcewLQXfrYl-jO7II1G7ic",
  authDomain: "rocketstore-d691d.firebaseapp.com",
  projectId: "rocketstore-d691d",
  storageBucket: "rocketstore-d691d.firebasestorage.app",
  messagingSenderId: "632734982626",
  appId: "1:632734982626:web:bcc6c332cd63361371d9bb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)