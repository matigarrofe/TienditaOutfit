
import {Link} from 'react-router-dom';
import './CartWidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

export const CartWidget = ()=>{
    return(
        <div>
            <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} className="carrito"/>
              
            </Link>
        </div>
    )
}