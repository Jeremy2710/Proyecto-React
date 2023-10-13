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
    { id: "icono1", img: icono1, info: "Contamos con una gran variedad de juegos para divertirse en familia" },
    { id: "icono2", img: icono3, info: "Puedes canjear tus tickets y llevarte increibles premios" },
    { id: "icono3", img: icono2, info: "Lleva tu tarjeta a cualquier sucursal para seguir disfrutando de nuestro juegos" },
    { id: "icono4", img: icono4, info: "Dentro del establecimiento, tenemos locales de comida rápida con un amplio menú" }
  ];

  const tarjetainfo = [
    { id: "tarjeta1", precio: "4.000", titulo: "simple", info: "15 cargas para juegos", info2: "1 pase a la montaña rusa", info3: "1 pase a los autitos chocadores", info4: "1 bebida a elección" },
    { id: "tarjeta2", precio: "7.500", titulo: "standard", info: "25 cargas para juegos", info2: "2 pases a la montaña rusa", info3: "2 pases a los autitos chocadores", info4: "2 bebidas a elección" },
    { id: "tarjeta3", precio: "10.000", titulo: "premium", info: "40 cargas para juegos", info2: "2 pases a la montaña rusa", info3: "2 pases a los autitos chocadores", info4: "3 bebidas a elección" },
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

                <TarjetasServicios key={tarjetas.id} titulo={tarjetas.titulo} info={tarjetas.info} info2={tarjetas.info2} info3={tarjetas.info3} info4={tarjetas.info4} precio={tarjetas.precio} />
              </>
            ))

          }

        </div>


      </section>
    </main>
  )
}
