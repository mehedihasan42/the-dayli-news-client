import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo ={
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