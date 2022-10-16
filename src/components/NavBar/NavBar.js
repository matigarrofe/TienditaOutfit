import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import Cart from '../Cart/Cart'
import {Link} from 'react-router-dom';




export const Navbar = () =>{
    return(
        <div>
            <Cart/>
            <nav className='nav-container'>
            
            <div>
            
                <Link to="/" className="titulo">
                <h2>Alaska Inc.</h2>
                   
                </Link>
            </div>
            <div className='navegacion'>
                <Link to="/">Inicio</Link>
                <Link to="/productos/buzos">Buzo</Link>
                <Link to="/productos/camisas">Camisa</Link>
                <Link to="/productos/pantalones">Pantalon</Link>
                <Link to="/productos/sacos">Saco</Link>
                
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
       
        </div>
        
    )
}
