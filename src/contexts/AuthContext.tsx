import React, { createContext, useState } from 'react';

interface ContextProps {
    isAuthenticated: boolean,
    toggleAuth(): void
}

const defaultContextState: ContextProps = {
    isAuthenticated: false,
    toggleAuth: () => {}
};

export const AuthContext = createContext<ContextProps>(defaultContextState);

const AuthContextProvider: React.FC<{ children: any}> = ({ children }) => {

    const [state, setState] = useState({
        isAuthenticated: false
    });
    
    const toggleAuth = () => {
        setState({ isAuthenticated: !state.isAuthenticated });
    };

    return (
        <AuthContext.Provider value={{...state, toggleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
