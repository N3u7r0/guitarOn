import { useState, useEffect } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase";

export const useProductsUser = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProducts = () => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    const userId = user.uid;

                    // Crear la consulta para los pedidos del usuario
                    const q = query(collection(db, `users/${userId}/misPedidos`));

                    // Obtener los datos de Firestore
                    getDocs(q)
                        .then((querySnapshot) => {
                            const productsData = querySnapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data(),
                            }));
                            console.log(productsData[0].productos);
                            
                            setProducts(productsData[0].productos);
                        })
                        .catch((err) => {
                            setError("Error al obtener los productos: " + err.message);
                            console.error("Error al obtener los productos:", err);
                        })
                        .finally(() => {
                            setLoading(false);
                        });
                } else {
                    setError("El usuario no está autenticado.");
                    setLoading(false);
                }
            });

            return () => unsubscribe(); // Limpiar el listener
        };

        fetchUserProducts();
    }, []);

    return { products, loading, error };
};