import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';

export const CartContainer = () => {
  const {productCartList, removeItem} = useContext(CartContext);

  return (
    <div>
      Carrito 
      <div>
        {productCartList.map(item=>(
          <>
            <p>{item.title} - {item.quantity}</p>
            <button onClick={()=>removeItem(item.id)}>Eliminar producto</button>
          </>
        ))}
      </div>
    </div>
  )
}
