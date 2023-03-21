// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1pPIj4oa8srwI0CHeMq4RuEF47dI4W00",
  authDomain: "mentalhealth-be0b2.firebaseapp.com",
  projectId: "mentalhealth-be0b2",
  storageBucket: "mentalhealth-be0b2.appspot.com",
  messagingSenderId: "394344862646",
  appId: "1:394344862646:web:c46719039614132b9c2717",
  measurementId: "G-MYXFS546Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = firebase.firestore();
let auth = firebase.auth();

function ler(){
    db.collection("psicologo").get().then(snapshot=> {
      snapshot.forEach(item => {
          console.log(item.data())
      });
    }).catch(error=>{
      console.log(error)
    })
}

export default ler;
