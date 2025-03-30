import {
    Flex,
    Button,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    TableContainer,
    Text,
    Divider
} from "@chakra-ui/react";
import { useState } from "react";
import { useDataUser } from "../hooks";
import { Spin, User, TableProducts } from "../components";
import { useProductsUser } from "../hooks/useProductsUser";

export const MiCuenta = () => {
    const { userDataContext, loading } = useDataUser(); // datos de usuario
    const { userRequestContext } = useProductsUser(); // datos de pedidos
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

    return (
        <>
            {loading ? (
                <Spin />
            ) : (
                <Flex
                    flexDir="column"
                    margin={{ base:"1rem" ,lg:"5rem"}}
                    gap="2rem"
                    pb={"5rem"}
                >
                    <User userDataContext={userDataContext} loading={loading} />

                    <TableContainer
                        overflowY="auto"
                        maxH="30vh"
                        borderWidth="1px"
                        borderRadius="lg"
                        boxShadow="md"
                    >
                        <Text textAlign="center" fontSize="x-large">
                            Mis pedidos
                        </Text>
                        <Divider />
                        <Table variant="striped" colorScheme="red">
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
                                {userRequestContext && userRequestContext.length === 0 ? (
                                    <Tr>
                                        <Td colSpan={5}>
                                            <Text textAlign="center" fontSize="lg" color="gray.500">
                                                No hay productos disponibles.
                                            </Text>
                                        </Td>
                                    </Tr>
                                ) : (
                                    userRequestContext?.map((pedido) => (
                                        <Tr key={pedido.id}>
                                            <Td>{new Date(pedido.fecha.seconds * 1000).toLocaleDateString()}</Td>
                                            <Td>{pedido.cliente.nombre}</Td>
                                            <Td>{pedido.cliente.direccion}</Td>
                                            <Td>${pedido.total}</Td>
                                            <Td>
                                                <Button
                                                    colorScheme="red"
                                                    onClick={() => {
                                                        setSelectedProducts(pedido.productos);
                                                        setTotalProducts(pedido.total);
                                                    }}
                                                >
                                                    Ver Productos
                                                </Button>
                                            </Td>
                                        </Tr>
                                    ))
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    {selectedProducts.length > 0 && (
                        <TableProducts productos={selectedProducts} precioTotal={totalProducts} />
                    )}
                </Flex>
            )}
        </>
    );
};