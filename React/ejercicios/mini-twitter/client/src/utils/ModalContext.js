import { createContext, useContext, useState } from 'react';

// Create a context for the token
const ModalContext = createContext(null);

// Hook to get the token
export const useModal = () => {
    return useContext(ModalContext);
};

// Create component to wrap the rest of the app
export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(null);

    return (
        <ModalContext.Provider value={[modal, setModal]}>
            {children}
        </ModalContext.Provider>
    );
};
