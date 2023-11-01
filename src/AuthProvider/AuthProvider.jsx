import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth,provider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    onAuthStateChanged(auth,currentUser=>{
       const unsubscribe = setUser(currentUser)
       setLoading(false)
        return ()=>{
            unsubscribe()
        }
    })

    const authInfo ={
        user,
        loading,
        logOut,
        signUp,
        logIn,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;