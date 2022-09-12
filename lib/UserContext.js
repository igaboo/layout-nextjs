import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { createContext, useState } from "react";

import toast from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [layouts, setLayouts] = useState([]);
  const [collections, setCollections] = useState([]);

  async function fetchUserData() {
    const newLayouts = [];
    const newCollections = [];

    await getDocs(collection(db, `users/${currentUser.uid}/layouts`)).then(
      (docs) => {
        docs.forEach((doc) => {
          newLayouts.push({ id: doc.id, data: doc.data() });
        });
      }
    );

    await getDocs(collection(db, `users/${currentUser.uid}/collections`)).then(
      (docs) => {
        docs.forEach((doc) => {
          newCollections.push({ id: doc.id, data: doc.data() });
        });
      }
    );

    setLayouts(newLayouts);
    setCollections(newCollections);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then(() =>
      toast("Successfully Signed Out!", {
        icon: "👋",
        style: {
          borderRadius: "10rem",
          background: "#fff",
          color: "#000",
        },
      })
    );
  }

  function loginWithGoogle() {
    return signInWithPopup(auth, provider).then(() =>
      toast("Successfully Signed Out!", {
        icon: "👋",
        style: {
          borderRadius: "10rem",
          background: "#fff",
          color: "#000",
        },
      })
    );
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (cred) => {
        const newUser = {
          id: cred.user.uid,
          email,
        };

        async function createDoc() {
          await setDoc(doc(db, "users", cred.user.uid), newUser);
        }

        createDoc();
      }
    );
  }

  function logout() {
    return signOut(auth)
      .then(() => {
        setLayouts([]);
        setCollections([]);

        toast("Successfully Signed Out!", {
          icon: "👋",
          style: {
            borderRadius: "10rem",
            background: "#fff",
            color: "#000",
          },
        });
        router.replace("/login");
      })
      .catch((err) => alert(err.message));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (currentUser) fetchUserData();
  }, [currentUser]);

  const value = {
    currentUser,
    loading,
    login,
    loginWithGoogle,
    signUp,
    logout,
    layouts,
    setLayouts,
    collections,
    setCollections,
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};
