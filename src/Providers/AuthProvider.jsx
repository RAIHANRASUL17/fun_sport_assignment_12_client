import React, { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { useState } from "react";
import { useEffect } from "react";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInWithEmailAndPassword
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  /*_____________________________________________________________*/
  // toggle logOut and login(observer onAuthStateChanged)
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true)
// update Profile
const updateUserProfile = (name, photo) => {
  return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
  });
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('current user', currentUser)
       setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  /*_____________________________________________________________*/
//signOut
  const logOut = ()=>{
    return signOut(auth)
  }

  // signIn/login google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = ()=>{
    return signInWithPopup(auth, googleProvider)
  }
  // github login
  const githubProvider= new GithubAuthProvider();
  const githubLogin = ()=>{
    return signInWithPopup(auth, githubProvider)
  }

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
    googleSignIn,
    githubLogin,
    updateUserProfile,
  };
  
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
