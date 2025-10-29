import React, { createContext } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const detail = {
        age: 22,
        name: 'oasif'
    }
    const authInfo = {
        
    }
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;