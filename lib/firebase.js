// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmLBnKMBZULT91_1p6auzHeQCUaRSbbzo",
  authDomain: "nextjs-layout-deb7f.firebaseapp.com",
  projectId: "nextjs-layout-deb7f",
  storageBucket: "nextjs-layout-deb7f.appspot.com",
  messagingSenderId: "14557937402",
  appId: "1:14557937402:web:c33c3d5b04bc077945d343",
  measurementId: "G-20RBPDG8T7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
// export const analytics = getAnalytics(app);
