import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const updatedUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user, 
        setUser,
        createUser,
        googleSignIn,
        signInUser,
        logOut,
        resetPassword,
        updatedUser,
        loading,
        setLoading
    }
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;