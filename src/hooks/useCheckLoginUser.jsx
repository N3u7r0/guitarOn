import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const useCheckLoginUser = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    
    return ({ user })
}
