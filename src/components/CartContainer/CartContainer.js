import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import './style.css'

export const CartContainer = () => {
  const {productCartList, removeItem, clear, getTotalPrecio} = useContext(CartContext);
 

  return (
    <div className='carro'>
      {
        productCartList.length > 0 ?
        <div>
          {productCartList.map(item=>(
            <div>
              <p>{item.nombre}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: {item.precio}</p>
              <p>Precio productos: {item.quantityPrice}</p>
              <button className='btn btn-sm bg-danger text-white' onClick={()=>removeItem(item.id)}>Eliminar producto</button>
            </div>
          ))}
          <button className='btn btn-sm bg-primary text-white' onClick={clear}>Vaciar el carrito</button>
          <p>Precio total: ${  getTotalPrecio()}</p>
        </div>
        :
          <>
            <p>Carrito Vacio, agrega algun producto</p>
            <Link to="/">
              Ir al listado de productos
            </Link>
          </>
      }
    </div>
  )
}