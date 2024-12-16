import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../services/firebase" 
import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { CartContext } from '../context/CartContext'

const CheckoutUseForm = () => {
    const [orderId, setOrderId] = useState("")
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()
    const { cart, cartTotal, clear } = useContext(CartContext)



    const onSubmit = (dataDelForm) => {
        //si pasa todas las validaciones
        let order = {
            buyer: {
                name: dataDelForm.nombre,
                address: dataDelForm.direccion,
                email: dataDelForm.email1
            },
            carrito: cart,
            total: cartTotal(),
                date: serverTimestamp()
    }
    //traer la collection

    const ventas = collection(db, "orders")
    //agregamos el doc
    addDoc(ventas, order)
        .then((res) => {
            setOrderId(res.id)
            clear()
        })
        .catch((error) => console.log(error))
}
return (
    <div className="checkout-container">
        {orderId ? (
            <div className="order-confirmation">
                <h2>🎉 ¡Gracias por tu compra!</h2>
                <p>Tu número de orden es:</p>
                <h4 className="order-id">{orderId}</h4>
            </div>
        ) : (
            <div className="checkout-form">
                <h1 className="checkout-title">Checkout</h1>

                {/* Resumen del carrito */}
                <div className="cart-summary">
                    <h3>🛒 Resumen de tu compra</h3>
                    {cart.length > 0 ? (
                        <ul className="cart-items">
                            {cart.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <p><strong>{item.title}</strong></p>
                                    <p>Cantidad: {item.qty}</p>
                                    <p>Precio: ${item.price.toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay productos en el carrito.</p>
                    )}
                    <h4 className="cart-total">Total: ${cartTotal().toFixed(2)}</h4>
                </div>

                {/* Formulario del checkout */}
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input
                            className={`form-control ${errors.nombre ? "input-error" : ""}`}
                            {...register("nombre", { required: true, minLength: 3 })}
                            placeholder="Tu nombre completo"
                        />
                        {errors?.nombre?.type === "required" && (
                            <p className="error-text">Por favor, complete el campo Nombre</p>
                        )}
                        {errors?.nombre?.type === "minLength" && (
                            <p className="error-text">El nombre debe tener mínimo 3 caracteres</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Dirección</label>
                        <input
                            className={`form-control ${errors.direccion ? "input-error" : ""}`}
                            {...register("direccion", { required: true, minLength: 10, maxLength: 35 })}
                            placeholder="Tu dirección"
                        />
                        {errors?.direccion?.type === "required" && (
                            <p className="error-text">Por favor, complete el campo Dirección</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className={`form-control ${errors.email1 ? "input-error" : ""}`}
                            type="email"
                            {...register("email1", { required: true })}
                            placeholder="Tu correo electrónico"
                        />
                        {errors?.email1?.type === "required" && (
                            <p className="error-text">Por favor, complete el campo Email</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Confirmación de Email</label>
                        <input
                            className={`form-control ${errors.email2 ? "input-error" : ""}`}
                            type="email"
                            {...register("email2", {
                                required: true,
                                validate: { equalMails: (email2) => email2 === getValues().email1 },
                            })}
                            placeholder="Confirma tu correo"
                        />
                        {errors?.email2?.type === "required" && (
                            <p className="error-text">Por favor, complete el campo de confirmación de Email</p>
                        )}
                        {errors?.email2?.type === "equalMails" && (
                            <p className="error-text">Las direcciones de correo tienen que ser iguales</p>
                        )}
                    </div>

                    <button
                        className="btn btn-primary submit-btn"
                        type="submit"
                        disabled={!cart.length}
                    >
                        Confirmar Compra
                    </button>
                </form>
            </div>
        )}
    </div>
);
};

export default CheckoutUseForm