import { useState, useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { CartContext } from "../context";

export const useLogoutUser = () => {
    const { setStateCartWidget } = useContext(CartContext); // Contexto del carrito
    const [error, setError] = useState(null);

    const logOut = async () => {
        try {
            await signOut(auth); // cierra la sesión en Firebase
            setStateCartWidget([]); // limpia los datos del carrito
            setError(null); // resetea el error en caso de exito
        } catch (err) {
            setError(err.code); 
            console.error("Error al cerrar sesión:", err.code);
        }
    };

    return { logOut, error };
};