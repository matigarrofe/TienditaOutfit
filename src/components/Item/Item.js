import './Item.css';
import {Link} from 'react-router-dom';

export const Item = ({item})=>{
    return(
        <div className="tarjeta-producto">
            <img src={item.pictureUrl} alt={item.nombre}/>
            <h4>{item.nombre}</h4>
            <p>$ {item.precio}</p>
            <Link to={`/item/${item.id}`}>
                <button class="btn btn-dark">Ver más</button>
            </Link>
        </div>
    )
}