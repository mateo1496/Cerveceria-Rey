import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj9a5quVsYW5PS5--7DvrO3PRvLGal0zg",
  authDomain: "cerveceria-rey.firebaseapp.com",
  projectId: "cerveceria-rey",
  storageBucket: "cerveceria-rey.appspot.com",
  messagingSenderId: "981188255704",
  appId: "1:981188255704:web:2d989678c198b89fba1cad"
};

const app = initializeApp(firebaseConfig);
//PARA ACCEDER A LA BASE DE DATOS, PASO LA CONFIGURACION QUE ESTA EN APP. FIRESTORE ACCEDE A MIS CONFIGUTACIONES.
export const db = getFirestore(app);