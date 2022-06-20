import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TokenProvider } from './utils/TokenContext';
import { ModalProvider } from './utils/ModalContext';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ModalProvider>
            <TokenProvider>
                <App />
            </TokenProvider>
        </ModalProvider>
    </React.StrictMode>
);

reportWebVitals();
