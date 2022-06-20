import { createContext, useContext, useState } from 'react';

// Create a context for the token
const TokenContext = createContext(null);

// Hook to get the token
export const useToken = () => {
    return useContext(TokenContext);
};

// Create component to wrap the rest of the app
export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Create a function to set the token in local storage
    const setTokenInLocalStorage = (newToken) => {
        localStorage.setItem('token', token);
        setToken(newToken);
    };

    return (
        <TokenContext.Provider value={[token, setTokenInLocalStorage]}>
            {children}
        </TokenContext.Provider>
    );
};
