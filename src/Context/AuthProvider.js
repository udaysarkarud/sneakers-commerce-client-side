import React, { createContext } from 'react';
import useFirebaseAuth from './../hook/useFirebaseAuth';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const authData = useFirebaseAuth()
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;