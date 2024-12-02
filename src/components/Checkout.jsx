import React from 'react'
import { serverTimestamp,addDoc } from 'firebase/database'

const Checkout = () => {
    const [user,setUser]= useState({})
    cont [validate, setValidate] =useState("")
    const [orderId,setOrderId]
    const {cart} = useContext(CartContext)
    const userData = (e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra =(e)=>{
        e.preventDefault()
        if(!user.name || !user.lastname || !user.email || !user.address){
            alert("los campos son obligatorios")
        }else if(user.email !== validate){
            alert("los mails deben ser iguales")
        } else {
            //objeto  de la orden
            let order = {
                buyer:user,
                carrito:cart,
                total:cartTotal(),
                date:serverTimestamp()
            }
            //traer nuestra coleccion
            const ventas = collection(db, "orders")
            //agregamos un doc
            addDoc(ventas,order)
            .then((res)=>{
                //actualizar el stock
                //OPCIONAL
                cart.forEach((item)=>{
                    const docRef = doc(db, "productos", item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                    })
                })
            })
        }

    }
  return (
    <div>
    <h4>Completa con tus datos</h4>
    <form className='d-flex flex-column align-items-center' onSubmit={finalizarCompra}> 
        <input type='text' name="name" placeholder='Ingrese su nombre' onChange={userData}/>
        <input type='text' name="lastname" placeholder='Ingrese su apellido' onChange={userData}/>
        <input type='text' name="address" placeholder='Ingrese su dirección' onChange={userData}/>
        <input type='email' name="email" placeholder='Ingrese su correo' onChange={userData}/>
        <input type='email' name="second-email" placeholder='Repita su correo' onChange={(e)=>setValidate(e.target.value)} />
        <input type='text'/>
        <input type='text'/>
        <button className='btn btn-success'>Enviar</button>

    </form>
    </div>
  )
}

export default Checkout