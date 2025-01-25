import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics'; // Tambahkan ini

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAbJoYYWtxXXFEROqIPVyQOkCciExOlRPg",
    authDomain: "masjid-al-anhar1.firebaseapp.com",
    projectId: "masjid-al-anhar1",
    storageBucket: "masjid-al-anhar1.firebasestorage.app",
    messagingSenderId: "502689758574",
    appId: "1:502689758574:web:f01a41a5ff19e90664d57f",
    measurementId: "G-5Z9BMM5W4R"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
export const db = getFirestore(app);

// Inisialisasi Analytics
export const analytics = getAnalytics(app); 
