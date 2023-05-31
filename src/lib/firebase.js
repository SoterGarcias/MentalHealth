// Importe as funções que você precisa dos SDKs que você precisa
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore/lite';


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
const storage = getStorage(app);

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

// Função para fazer o upload da imagem e salvar a URL no perfil do usuário
export const handleImageUpload = async (userId, file) => {
    try {
      const storageRef = ref(storage, `images/${userId}/profile.jpg`); // Defina o caminho e nome do arquivo desejado no Storage
      await uploadBytes(storageRef, file); // Faz o upload do arquivo para o Firebase Storage
  
      // Obtém a URL de download do arquivo
      const downloadUrl = await getDownloadURL(storageRef);
  
      // Salva a URL no banco de dados do usuário
      const userRef = doc(db, 'psicologos', userId);
      await setDoc(userRef, { profileImageUrl: downloadUrl }, { merge: true });
  
      console.log('Upload da imagem concluído com sucesso!');
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
    }
  };

  export { db, analytics, handleSignIn };