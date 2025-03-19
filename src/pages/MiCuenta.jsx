import { useDataUser } from "../hooks";
import { User } from "../components";

export const MiCuenta = () => {
    const { userDataContext, loading } = useDataUser(); // datos de usuario

    return (
        <>
            <User userDataContext={userDataContext} loading={loading} />
        </>
    );
};
