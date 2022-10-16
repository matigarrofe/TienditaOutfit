import {useState} from 'react';
import './ItemCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

export const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(initial);

    const decrementar = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    const incrementar = ()=>{
        if(count<stock){
            setCount(count+1)
        }
    }

    return(
        <div className='estilosContador'>
            <p>Disponible: {stock}</p>
            <div className='contenedorControles'>
            <FontAwesomeIcon icon={faMinus} disabled={stock===0} onClick={decrementar}/>
                <p>{count}</p>
                    <FontAwesomeIcon icon={faPlus} disabled={stock===0} onClick={incrementar}/>
            </div>
            <button disabled={stock === 0} className='botonAgregar' onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}