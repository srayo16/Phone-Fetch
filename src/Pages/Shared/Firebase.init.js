import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDkD_pf8s-U4b8bxAzGjWdER2i1pQ_b7OM",
  authDomain: "phoen-tech.firebaseapp.com",
  projectId: "phoen-tech",
  storageBucket: "phoen-tech.appspot.com",
  messagingSenderId: "15621281919",
  appId: "1:15621281919:web:d3da33cc02c27b523c074a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;