import { useState, useEffect, useContext } from "react";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserContext } from "../context";

export const useProductsUser = () => {
    const [loading, setLoading] = useState(true);
    /*    const [productsUser, setProductsUser] = useState([]); */
    const [error, setError] = useState(null);
    const [user] = useAuthState(auth)
    const { userProductsContext, SetUserProductsContext } = useContext(UserContext);

    useEffect(() => {
        if (userProductsContext.length === 0) {
            const fech = async () => {
                try {


                    console.log("entro al try");
                    
                    // consulta para los pedidos del usuario, los ordena descendentemente x fecha
                    const consulta = query(collection(db, `users/${user.uid}/misPedidos`), orderBy("fecha", "desc"));

                    // Obtener los datos de Firestore
                    getDocs(consulta)
                        .then((querySnapshot) => {
                            const pedidoUser = querySnapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data(),
                            }));
                            console.log(pedidoUser[0].productos);

                            SetUserProductsContext(pedidoUser[0].productos);
                            /*   setProductsUser(pedidoUser[0].productos) */
                        })
                        .catch((err) => {
                            setError("Error al obtener los productos: " + err.message);
                            console.error("Error al obtener los productos:", err);
                        })
                        .finally(() => {
                            setLoading(false);
                        });
                } catch (error) {
                    console.error("Error al procesar el usuario:", error);
                    setError("Error al procesar el usuario");
                }
            };

            // se ejecuta cuando encuentra al usuario para evitar el error cuando el componente se monta la primera vez
            if (user) {
                fech();
            }

        }
    }, [user]);

    return { userProductsContext, loading, error };
};