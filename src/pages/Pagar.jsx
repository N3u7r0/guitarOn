import { useDataUser } from "../hooks";
import { CheckOut } from "../components";

export const Pagar = () => {
  const { userDataContext, loading } = useDataUser(); // datos de usuario

  return (
    <>
      <CheckOut userDataContext={userDataContext} loading={loading} />
    </>
  );
};
