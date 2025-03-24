import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { CartContext, ToastContext } from "../context";

export const useLogoutUser = () => {
    const { setStateCartWidget } = useContext(CartContext); // Contexto del carrito
    const { setErrorContext, setExitoContext } = useContext(ToastContext);

    const logOut = async () => {
        try {
            await signOut(auth); // cierra la sesión en Firebase
            setStateCartWidget([]); // limpia los datos del carrito
            setExitoContext("!Nos vemos pronto!")
        } catch (err) {
            setErrorContext("Error al cerrar sesión:")
            console.error("Error al cerrar sesión:", err.code);
        }
    };

    return { logOut };
};