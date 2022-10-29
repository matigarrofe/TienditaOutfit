
import {NavLink} from 'react-router-dom';
import './CartWidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {CartContext} from './../../context/CartContext'
import { useContext } from 'react';

export const CartWidget = ()=>{
    const {getTotalProducts} = useContext(CartContext);

    return(
        <div>
            <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/cart">
                <FontAwesomeIcon icon={faCartShopping}/>
                <span className='carr'>{getTotalProducts()}</span>
              
            </NavLink>
        </div>
    )
}