import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const useCheckLoginUser = () => {
    //si el usuarion no se logeo, tira null
    const [user] = useAuthState(auth);;

    return ({ user })
}
