import Carrito from '../../assets/cart.png';
import {Link} from 'react-router-dom';

export const CartWidget = ()=>{
    return(
        <div>
            <Link to="/cart">
                <img src={Carrito} alt="imagen del carrito" style={{width:25}}/>
                <span style={{backgroundColor: 'white', borderRadius:"50%", width:"15px", heigth:"10px", fontSize:"10px", color:"black"}}></span>
            </Link>
        </div>
    )
}