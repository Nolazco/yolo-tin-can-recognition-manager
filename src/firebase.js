import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAkycVGdXgRUP1b_l-rWLu1NKAJdfiizPg",
  authDomain: "yolotroll-6ef4a.firebaseapp.com",
  projectId: "yolotroll-6ef4a",
  storageBucket: "yolotroll-6ef4a.appspot.com",
  messagingSenderId: "449150495549",
  appId: "1:449150495549:web:7fe350906d0e2f07923354"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();