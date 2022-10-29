import tienda from '../../assets/tienda.jpg'
import './style.css'


export const Nosotros = () => {
  return (
    <>

      
      <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={tienda} alt="ImagenTienda"/>
              </div>
              <div className="col-lg-6 contenido">
                <h5>Alaska</h5>
                <p>Las colecciones Alaska llevan en su ADN todo el conocimiento y la tradición de una marca histórica de la Argentina en indumentaria masculina. Descubrí todo lo nuevo que propone este clásico que se renueva con cada una de sus colecciones.</p>
              </div>
            </div>
          </div>
    </>
    
  )
}

