import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword , signInWithEmailAndPassword  } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

 const CreateEmailAndPassword = (formData) => {
     console.log('formdata', formData);
        return createUserWithEmailAndPassword(auth, formData?.email, formData?.password);
       
    }
    const SignInWithUserEmailAndPassword = ({email,password}) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
        })
        return () => unsubscribed;
    }, [])

    const logOut = () =>{
        signOut(auth)
        .then(() => {})
    }

    return (
        {
            user,
            signInUsingGoogle,
            logOut,
            SignInWithUserEmailAndPassword,
            // handleEmailChange,
            // handlePasswordChange,
            // handleRegistration,
            CreateEmailAndPassword
        }
    );
};

export default useFirebase;