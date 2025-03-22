import { useContext, useState } from "react";
import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { CartContext } from "../../../context";
import { Toast } from "../../ui";
import { useToast } from "@chakra-ui/react";

export const BtnLogOut = () => {
  const { setStateCartWidget } = useContext(CartContext);
  const [error, setError] = useState(null);
  const toast = useToast(); // tostada de Chakra U

  const handleLogOut = async () => {

    try {
      await signOut(auth); // cierra la sesion en Firebase
      setStateCartWidget([]); // limpia los datos del carrito
      setError(null); // resetea el error en caso de éxito

      toast({
        title: "¡Éxito!",
        description: "Sesion cerrada correctamente.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });

    } catch (err) {
      console.error("Error al cerrar sesión:", err);
      setError(err);
    }

  };




  return (
    <div>
      <Button onClick={handleLogOut} _hover={{
        backgroundColor: "rgba(200, 0, 0, 0.85)",
        color: "white",
      }}>LogOut</Button>
      <Toast error={error} />
    </div>
  );
};
