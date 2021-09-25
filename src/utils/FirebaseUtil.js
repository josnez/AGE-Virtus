import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  setDoc
} from 'firebase/firestore';
import { uuid } from 'uuidv4';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function firebaseConfig() {
  const config = {
    apiKey: 'AIzaSyAXsJBfn7nj74cAo8bAwwPAIQ6BqPZz7I4',
    authDomain: 'age-virtus.firebaseapp.com',
    projectId: 'age-virtus',
    storageBucket: 'age-virtus.appspot.com',
    messagingSenderId: '133965743102',
    appId: '1:133965743102:web:7b015e7ad5641cd27f76af',
    measurementId: 'G-X0PS69Z123'
  };

  // Initialize Firebase
  const app = initializeApp(config);
  const analytics = getAnalytics(app);
}

export function firebaseRegistrarUsuario(email, password) {
  createUserWithEmailAndPassword(getAuth(), email, password).then(
    (credenciales) => {
      // credenciales.user.
    }
  );
}

export async function firebaseIniciarSesion(email, password) {
  try {
    let credenciales = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    //credenciales.user
  } catch (e) {
    return false;
  }
  return true;
}

export async function firebaseBuscar(coleccionABuscar) {
  let listado = [];
  let consulta = collection(getFirestore(), coleccionABuscar);
  let resultado = await getDocs(consulta);
  resultado.forEach((documento) => {
    let objeto = documento.data();
    objeto.id = documento.id;
    listado.push(objeto);
  });
  return listado;
}

export function firebaseCrear(coleccion, objeto) {
  objeto.id = uuid();
  let referencia = doc(getFirestore(), coleccion, objeto.id);
  setDoc(referencia, objeto);
}

export async function firebaseEliminar(coleccion, id) {
  await deleteDoc(doc(getFirestore(), coleccion, id));
}
