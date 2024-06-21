import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

//web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3gzPPUTa5vkxLkJ9bIMdv1IxD1oIWStw",
  authDomain: "house-marketplace-61a8b.firebaseapp.com",
  projectId: "house-marketplace-61a8b",
  storageBucket: "house-marketplace-61a8b.appspot.com",
  messagingSenderId: "814408089630",
  appId: "1:814408089630:web:879121eed8e9ca4d60ae0f",
  measurementId: "G-0FKV1PN4CE"
};


// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
