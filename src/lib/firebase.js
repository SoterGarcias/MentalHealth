// Importe as funções que você precisa dos SDKs que você precisa
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDocs } from 'firebase/firestore/lite';
import { getFirestore, collection } from 'firebase/firestore/lite';

// A configuração do Firebase do seu aplicativo da web
// Para Firebase JS SDK v7.20.0 e posterior, measurementId é opcional
const firebaseConfig = {
    apiKey: "AIzaSyCt18u3LrGJU2sudwUDOy2Kbs7XQCdw74M",
    authDomain: "mentalhealth-5232d.firebaseapp.com",
    projectId: "mentalhealth-5232d",
    storageBucket: "mentalhealth-5232d.appspot.com",
    messagingSenderId: "639645757072",
    appId: "1:639645757072:web:21255982a556ae1ceeb215",
    measurementId: "G-9GSBZ9TT3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics = null;
const db = getFirestore(app);

if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

const handleSignIn = async (email, password) => {
    try {
        const psicologosRef = collection(db, 'psicologos'); // Referência à coleção 'psicologos'
        const querySnapshot = await getDocs(psicologosRef); // Obter todos os documentos da coleção 'psicologos'

        querySnapshot.forEach((doc) => {
            const userData = doc.data(); // Dados do documento

            console.log('Email:', userData.email);
            console.log('Senha:', userData.password);
        });
    } catch (error) {
        console.error('Erro ao recuperar dados:', error);
    }
};

export { db, analytics, handleSignIn };