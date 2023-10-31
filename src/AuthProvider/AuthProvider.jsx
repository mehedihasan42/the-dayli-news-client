import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    onAuthStateChanged(auth,currentUser=>{
       const unsubscribe = setUser(currentUser)

        return ()=>{
            unsubscribe()
        }
    })

    const authInfo ={
        user,
        logOut,
        signUp,
        logIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;