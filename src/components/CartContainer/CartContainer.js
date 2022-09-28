import React, {useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import {db} from '../../utils/firebase'
import './style.css'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';

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


  return (
    <div className='container'>
     <button className='btn btn-sm bg-success text-white' onClick={updateOrder}>Actualizar orden</button>
      {idOrder ?
        <>
          <p>Su solicitud fue creada: <strong>{idOrder}</strong></p>
          <Link to="/">
            Ir al listado de productos
          </Link>
        </>
        :
        <div className='container'>
          {
            productCartList.length > 0 ?
            <div className='container'>
              {productCartList.map(item=>(
                <div style={{border:"1px solid red",  width:"200px"}}>
                  <p><strong>{item.nombre}</strong></p>
                  <img src={item.pictureUrl} style={{border:"1px solid black",  width:"80%", height:'250px'}}/>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio unitario: ${item.precio}</p>
                  <p>Precio productos: ${item.quantityPrice}</p>
                  <button className='btn btn-sm bg-danger text-white' onClick={()=>removeItem(item.id)}>Eliminar producto</button>
                </div>
              ))}
              <button className='btn btn-sm bg-primary text-white' onClick={clear}>Vaciar el carrito</button>
              <p>Precio total: ${getTotalPrecio()}</p>
              <form onSubmit={sendOrder}>
                <label>Nombre: </label>
                <input type="text" />
                <label>Telefono: </label>
                <input type="text" />
                <label>Correo: </label>
                <input type="email" />
                <button className='btn btn-sm bg-primary text-white' type='submit'>Enviar orden</button>
              </form>
            </div>
            :
              <>
                <p>El carrito esta vacio, Agrega algun producto</p>
                <Link to="/">
                  Ir al listado de productos
                </Link>
              </>
          }
        </div>
      }
    </div>
  )
}