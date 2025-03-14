import { useContext, useState } from "react";
import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { CartContext } from "../../../context";
import { ToastErr } from "../../ui";

export const BtnLogOut = () => {
  const { setStateCartWidget } = useContext(CartContext);
  const [error, setError] = useState(null); // Estado para manejar el error

  const handleLogOut = async () => {
    try {
      await signOut(auth); // cierra la sesion en Firebase
      setStateCartWidget([]); // limpia los datos del carrito
      console.log("Usuario deslogueado exitosamente");
      setError(null); // Resetea el error en caso de éxito
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
      setError(err); // Actualiza el estado con el error
    }
  };

  return (
    <div>
      <Button onClick={handleLogOut} _hover={{
        backgroundColor: "rgba(200, 0, 0, 0.85)",
        color: "white",
      }}>LogOut</Button>
      {/* Pasas el estado "error" como prop a ToastErr */}
      <ToastErr error={error} />
    </div>
  );
};
