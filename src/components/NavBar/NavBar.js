import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import Cart from '../Cart/Cart'
import {NavLink, Link} from 'react-router-dom';





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
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/productos/buzos">Buzo</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/productos/camisas">Camisa</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/productos/pantalones">Pantalon</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive" : "claseInactive"} to="/productos/sacos">Saco</NavLink>
                
            </div>
            <div>
                <CartWidget className={({isActive})=>isActive ? "claseActive" : "claseInactive"}/>
            </div>
        </nav>
       
        </div>
        
    )
}
