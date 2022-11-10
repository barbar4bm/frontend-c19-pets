import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../firebase";
export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('Aca no hay ningun Proveedor *Provider*')
    return context
}
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signup = (email,password) => createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    
    const logout = () => signOut(auth);

    const resetPassword = (email) => sendPasswordResetEmail(auth, email)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
    },[])
    return <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle, resetPassword }}>{ children }</authContext.Provider>
}
