import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../components";
import { useCheckLoginUser, useDataUser } from "../hooks";

export const MiCuenta = () => {
    const navigate = useNavigate();
    const { userCheck } = useCheckLoginUser(); // hook para verificar el usuario
    const { userData, loading } = useDataUser(); // datos de usuario

    useEffect(() => {
        // si no hay usuario, va al home
        if (!userCheck) {
            navigate("/");
        }
    }, [userCheck, navigate]);

    return (
        <>
            {userCheck && <User userData={userData} loading={loading} />}
        </>
    );
};
