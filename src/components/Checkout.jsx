import React, { useState, useContext } from 'react';
import { serverTimestamp, addDoc, collection, getDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from "../services/firebase";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext"; // Asegúrate de que el path sea correcto.

const Checkout = () => {
    const [user, setUser] = useState({});
    const [validate, setValidate] = useState("");
    const [orderId, setOrderId] = useState("");
    const { cart, cartTotal, clear } = useContext(CartContext);

    const userData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const finalizarCompra = (e) => {
        e.preventDefault();
        if (!user.name || !user.lastname || !user.email || !user.address) {
            alert("Los campos son obligatorios");
        } else if (user.email !== validate) {
            alert("Los correos deben coincidir");
        } else {
            // Crear objeto de la orden
            let order = {
                buyer: user,
                carrito: cart,
                total: cartTotal(),
                date: serverTimestamp(),
            };
            // Referencia a la colección
            const ventas = collection(db, "orders");
            // Agregar documento
            addDoc(ventas, order)
                .then((res) => {
                    // Actualizar stock
                    cart.forEach((item) => {
                        const docRef = doc(db, "productos", item.id);
                        getDoc(docRef).then((dbDoc) => {
                            updateDoc(docRef, { stock: dbDoc.data().stock - item.qty });
                        });
                    });
                    setOrderId(res.id);
                    clear();
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div>
            {orderId !== "" ? (
                <div>
                    <h4>¡Generaste tu orden correctamente!</h4>
                    <h5>El ID de tu orden es: {orderId}</h5>
                    <Link className="btn btn-success" to="/">Volver a inicio</Link>
                </div>
            ) : (
                <div>
                    <h4>Completa tus datos</h4>
                    <form className="d-flex flex-column align-items-center" onSubmit={finalizarCompra}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ingrese su nombre"
                            value={user.name || ""}
                            onChange={userData}
                        />
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Ingrese su apellido"
                            value={user.lastname || ""}
                            onChange={userData}
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Ingrese su dirección"
                            value={user.address || ""}
                            onChange={userData}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Ingrese su correo"
                            value={user.email || ""}
                            onChange={userData}
                        />
                        <input
                            type="email"
                            name="second-email"
                            placeholder="Repita su correo"
                            value={validate}
                            onChange={(e) => setValidate(e.target.value)}
                        />
                        <button className="btn btn-success">Enviar</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Checkout;
