import './style.css'


export const Contacto = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
                <iframe 
               className='map'  id="gmap_canvas" src="https://maps.google.com/maps?q=ituzaingo%206970&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 contenido">
          <h5>Visita nuestra tienda</h5>
          <p>No podras comprar la felicidad, pero si el outfit para esa ocasion especial. No notaras la diferencia.</p>
          <h5>indumentaria pensada en ti</h5>
          <p>Ituzaingo 6970</p>
          <p>tienditaoutfit@gmail</p>
          <h5>Abierto</h5>
          <p><strong>Lun - Vie:</strong> 8am - 6pm</p>
          <p><strong>Sab:</strong> 8am - 12:30pm</p>
          <p><strong>Dom:</strong> Cerrado</p>

        </div>
      </div>
    </div>
  )
}
