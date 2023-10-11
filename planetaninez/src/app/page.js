import Image from 'next/image'
import styles from './page.module.scss'
import Navbar from './components/Navbar'
import Servicios from './components/Servicios'
import TarjetasServicios from './components/Tarjetaservicios'

import icono1 from '../../public/icono1.png'
import icono2 from '../../public/icono2.png'
import icono3 from '../../public/icono3.png'
import icono4 from '../../public/icono4.png'



export default function Home() {

  const servicioiconos = [
    { id: "icono1", img: icono1, info: "Contamos con una gran variedad juegos para divertirse en familia." },
    { id: "icono2", img: icono3, info: "Puedes canjear tus tickets y llevarte increibles premios" },
    { id: "icono3", img: icono2, info: "Lleva tu tarjeta a todas nuestras sucursales y seguir disfrutando de nuestro juegos" },
    { id: "icono4", img: icono4, info: "Dentro del establecimiento, tenemos locales de comida rapida con un amplio menú" }
  ];

  const tarjetainfo = [
    { id: "tarjeta1", titulo: "Pase de plata", info: "dsdsadsad" },
    { id: "tarjeta2", titulo: "Pase de oro", info: "sadsadsadsadsadsdsd" },
    { id: "tarjeta3", titulo: "Pase de diamante", info: "dsasdsadsadsad" },
  ];



  return (
    <main>
      <Navbar />
      <div>
        <p>
          Bueno por aqui empezamos
        </p>
      </div>

      <section id='servicios'>

        <h2>Servicios</h2>

        <div className='card-iconos-grid'>
          {
            servicioiconos.map((iconos) => (
              <>

                <Servicios key={iconos.id} imagen={iconos.img} info={iconos.info} />
              </>
            ))

          }
        </div>

        <div className='card-pases-grid'>

        {
            tarjetainfo.map((tarjetas) => (
              <>

                <TarjetasServicios key={tarjetas.id} titulo={tarjetas.titulo} info={tarjetas.info} />
              </>
            ))

          }

        </div>



      </section>
    </main>
  )
}
