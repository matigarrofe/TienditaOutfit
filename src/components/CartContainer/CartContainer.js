import React, {useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import {db} from '../../utils/firebase'
import './style.css'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'

export const CartContainer = () => {
  const {productCartList, removeItem, clear, getTotalPrecio} = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("")
 
  
  const sendOrder = (event)=>{
    event.preventDefault();
    const order = {
      buyer:{
        name: event.target[0].value,
        phone:event.target[1].value,
        email: event.target[2].value
      },
      items: productCartList,
      total: getTotalPrecio()
    }
    console.log("order", order)
    const queryRef = collection(db, "orders");
   
    addDoc(queryRef, order).then(response=>{
      console.log("response", response);
      setIdOrder(response.id)
      clear();
    });
  }

  const updateOrder = ()=> {
  
    const queryRef = doc(db, "orders", "GbMMY0SYPjoTSuAvGKDF");

    updateDoc(queryRef,{
      total:80
    }).then(response=>console.log(response))
  }
  const mostrarAlerta=()=>{
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Tu orden fue enviada',
      showConfirmButton: false,
      timer: 1500
    })
   }


  return (
    <div className='containerCarrito'>
     <button className='btn btn-sm bg-success text-white' onClick={updateOrder}>Actualizar orden</button>
      {idOrder ?
        <>
          <p>Su solicitud fue creada: <strong>{idOrder}</strong></p>
          <Link to="/">
            Ir al listado de productos
          </Link>
        </>
        :
        <div className='containerCarrit'>
          {
            productCartList.length > 0 ?
            <div className='container'>
              {productCartList.map(item=>(
                <div style={{ width:"200px"}}>
                  <p><strong>{item.nombre}</strong></p>
                  <img src={item.pictureUrl} style={{width:"80%", height:'250px'}}/>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Total: ${item.quantityPrice}</p>
                  <button className='btn btn-sm bg-danger text-white' onClick={()=>removeItem(item.id)}>Eliminar producto</button>
                </div>
              ))}
              <button className='btn btn-sm bg-primary text-white' onClick={clear}>Vaciar el carrito</button>
              <p>Precio total: ${getTotalPrecio()}</p>
              <form  className='formulario mb-5' onSubmit={sendOrder}>
                <h4 className='text-white'>Datos de la orden</h4>
                <input className='controls' type="text" placeholder='Ingrese su Nombre'/>
                <input className='controls' type="text" placeholder='Ingrese su Apellido'/>
                <input className='controls' type="tel" placeholder="Ingrese su Telefono"/>
                <input className='controls' type="email" placeholder='Ingrese su Correo'/>
                <button onClick={()=>mostrarAlerta()} className='botonEnviar' type='submit' >Enviar orden</button>
              </form>
            </div>
            :
              <>
                <p className='pt-5'>El carrito esta vacio, Agrega algun producto</p>
                <Link className='pb-5' to="/">
                  Ir al listado de productos
                </Link>
              </>
          }
        </div>
      }
    </div>
  )
}