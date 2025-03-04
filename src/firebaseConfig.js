import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbHyeEKqP57BgLZ4hompM67MCK8fvEbCo",
  authDomain: "todo-d8c28.firebaseapp.com",
  projectId: "todo-d8c28",
  storageBucket: "todo-d8c28.appspot.com",
  messagingSenderId: "934174536390",
  appId: "1:934174536390:web:616b74e603cb34a4bbddc7",
  measurementId: "G-92TP75D9QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
