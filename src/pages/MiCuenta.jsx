import {
    Flex,
} from "@chakra-ui/react";
import { useState } from "react"
import { useDataUser } from "../hooks";
import { Spin, User, TableProducts } from "../components";
import { useProductsUser } from "../hooks/useProductsUser";
import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export const MiCuenta = () => {
    const { userDataContext, loading } = useDataUser(); // datos de usuario
    const { userRequestContext } = useProductsUser(); // datos de pedidos

    const [selectedProducts, setSelectedProducts] = useState(null);
    const [totalProducts, setTotalProducts] = useState(null);

    return (
        <>
            {loading ? (
                <Spin />
            ) : (
                <Flex
                    m={"2rem"}
                    gap={"2rem"}
                    flexWrap={"wrap"}
                    justifyContent={"center"}
                >
                    <User userDataContext={userDataContext} loading={loading} />

                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Fecha</Th>
                                <Th>Nombre</Th>
                                <Th>Dirección</Th>
                                <Th>Total</Th>
                                <Th>Productos</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {userRequestContext.map((pedido) => (
                                <Tr key={pedido.id}>
                                    <Td>{new Date(pedido.fecha.seconds * 1000).toLocaleDateString()}</Td>
                                    <Td>{pedido.cliente.nombre}</Td>
                                    <Td>{pedido.cliente.direccion}</Td>
                                    <Td>${pedido.total}</Td>
                                    <Td>
                                        <Button
                                            colorScheme="blue"
                                            onClick={() => { setSelectedProducts(pedido.productos); setTotalProducts(pedido.total); }}
                                        >
                                            Ver Productos
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>

                    {selectedProducts && (
                        <TableProducts productos={selectedProducts} precioTotal={totalProducts} />
                    )}
                </Flex>
            )}
        </>
    );
};