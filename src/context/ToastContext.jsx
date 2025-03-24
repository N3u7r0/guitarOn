import { createContext, useState } from "react";
export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [errorContext, setErrorContext] = useState(null);
    const [exitoContext, setExitoContext] = useState(null);

    return (
        <ToastContext.Provider value={{ errorContext, setErrorContext, exitoContext, setExitoContext }}>
            {children}
        </ToastContext.Provider>
    );
};
