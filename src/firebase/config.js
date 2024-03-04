import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDe5PvmrfzyL9FR31JMkGrGWRYZINiEDVo",
    authDomain: "macro-tributary-409013.firebaseapp.com",
    projectId: "macro-tributary-409013",
    storageBucket: "macro-tributary-409013.appspot.com",
    messagingSenderId: "190254683602",
    appId: "1:190254683602:web:30d00136edda3f1c09a40b",
    measurementId: "G-75X8HMLBQV"
  };
  
  const app=initializeApp(firebaseConfig)
  const firestore=getFirestore(app)

  export { app as Firebase ,firestore as Firestore};