import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA7vcBcWgBXb4qKZQbwg7ohSJfupqFr2ys",
  authDomain: "actividad-15-ea754.firebaseapp.com",
  databaseURL: "https://actividad-15-ea754-default-rtdb.firebaseio.com",
  projectId: "actividad-15-ea754",
  storageBucket: "actividad-15-ea754.appspot.com",
  messagingSenderId: "175576623057",
  appId: "1:175576623057:web:05a7123bd012576e2462f0"
};

// Initialize Firebase CON ESTA CONSTANTE LLAMAMOS FIREBASE
const db = initializeApp(firebaseConfig);

export default getDatabase(db);