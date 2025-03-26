import {
    Flex,
} from "@chakra-ui/react";

import { useDataUser } from "../hooks";
import { Spin, User,TableProducts } from "../components";

export const MiCuenta = () => {
    const { userDataContext, loading } = useDataUser(); // datos de usuario

    return(
    <>
        {loading ? (
            <Spin />
        ) : (<Flex
            m={"2rem"}
            gap={"2rem"}
            flexWrap={"wrap"}
            justifyContent={"center"}
        >
            <User userDataContext={userDataContext} loading={loading} />

            
            <TableProducts  productos={[]} precioTotal={0}/>
        </Flex>
        )}
    </>
    )
}
