import { useState, useContext } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

export const ItemDetail = ({item})=>{
    const {addItem} = useContext(CartContext);
    const [contador, setContador] = useState(0);

    const onAdd = (dato)=>{
        console.log("hizo click", dato);
        setContador(dato)
        addItem(item, dato)
    }

    return(
        <div className='detail-container'>
            <h1 style={{width: "100%", color: 'black'}}>Detalle del Producto</h1>
            
            <div className='row pt=5 img-container'>
                <div className='col-md-6 imgCart'><img src={item.pictureUrl} alt={item.nombre}/></div>
                    <div className='col-md-6'><div className='img-container'>
                        <h4>{item.nombre}</h4>
                        <p>{item.desc}</p>
                        <h5>$ {item.precio}</h5>
                        <h6>Productos seleccionados: {contador}</h6>
                        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
            {
                contador > 0 &&
                <Link to="/cart">
                    <button className='btn btn-sm bg-success text-white btnCarrito'>Ir al carrito</button>
                </Link>
            }
        </div>
    )
}