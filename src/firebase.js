import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics'; // Tambahkan ini

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC-RjMXafWhh0FgtcF-lOs1irtQIKNymeg",
    authDomain: "masjid-al-anhar.firebaseapp.com",
    projectId: "masjid-al-anhar",
    storageBucket: "masjid-al-anhar.firebasestorage.app",
    messagingSenderId: "385768567230",
    appId: "1:385768567230:web:1bc0914394b0e3ed0689ef",
    measurementId: "G-SQGPEM0QE4",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
export const db = getFirestore(app);

// Inisialisasi Analytics
export const analytics = getAnalytics(app); 
