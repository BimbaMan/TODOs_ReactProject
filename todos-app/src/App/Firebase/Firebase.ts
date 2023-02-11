import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7CGuxBpfx1PDueO7wgIf56jmWu-nqHpU",

  authDomain: "todo-app-a201e.firebaseapp.com",

  projectId: "todo-app-a201e",

  storageBucket: "todo-app-a201e.appspot.com",

  messagingSenderId: "567240203808",

  appId: "1:567240203808:web:3ac65e3aa5a4653a5ce645",
};
const app = initializeApp(firebaseConfig);
export const DataBase = getFirestore(app);
