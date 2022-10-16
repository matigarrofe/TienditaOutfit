import {React} from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faComment} from '@fortawesome/free-regular-svg-icons'

export const Footer = () =>{
  return (
    <div>
      <footer className='text-white py-4 bg-dark'>
        <div className='containerFooter'>
            <nav className='row'>
                <div className='col-lg-4 col-md-6  lista'>
                <ul className='font-weigth-bold mb-2 list-unstyled'>
                    <li className='text-center'>Politica de privacidad</li>
                    <li className='text-center'>Terminos y condiciones</li>
                </ul>
                    
                </div>
                <div className='col-lg-4 col-md-6 list-unstyled lista'>
                <ul className='list-unstyled'>
                
                    <li className='text-center'>
                      <Link to='/sobreNosotros' className='listaLink'>Sobre nosotros</Link>
                      </li>
                    <li className='text-center'>
                      <Link to='/contacto' className='listaLink'>Contactanos</Link>
                    </li>
                </ul>
                    
                </div>
                <div className='col-lg-4 col-md-6  lista'>
                <ul className='list-unstyled'>
                    <li className='text-white'> 
                    <FontAwesomeIcon icon={faEnvelope}/>  tienditaoutfit@gmail.com</li>
                    <li><FontAwesomeIcon icon={faComment}/> Comentarios</li>
                    <li className='text-white'>Telefono: 3416692494</li>
                </ul>
                   
                    
                </div>
            </nav>
        </div>

      </footer>
    </div>
  )
}
