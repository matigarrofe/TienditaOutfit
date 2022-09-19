import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import logotipo from '../../assets/logotipo.png';
import {Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <div>
                <Link to="/">
                    <img className="nav-brand" src={logotipo} alt="logo"/>
                </Link>
            </div>
            <div className='navegacion'>
                <Link to="/">Inicio</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/contacto">Contacto</Link>
                
                
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
