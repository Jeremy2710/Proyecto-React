import Image from 'next/image'
import styles from './page.module.scss'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Servicios from './components/Servicios'
import TarjetasServicios from './components/Tarjetaservicios'
import icono1 from '../../public/icono1.png'
import icono2 from '../../public/icono2.png'
import icono3 from '../../public/icono3.png'
import icono4 from '../../public/icono4.png'



export default function Home() {

  const servicioiconos = [
    { id: "icono1", img: icono1, info: "Contamos con una gran variedad juegos para divertirse en familia." },
    { id: "icono2", img: icono2, info: "Puedes canjear tus tickets y llevarte increibles premios" },
    { id: "icono3", img: icono3, info: "Lleva tu tarjeta a todas nuestras sucursales y seguir disfrutando de nuestro juegos" },
    { id: "icono4", img: icono4, info: "Dentro del establecimiento, tenemos locales de comida rapida con un amplio menú" }
  ];

  const tarjetainfo = [
    { id: "tarjeta1", info: "dsdsadsad" },
    { id: "tarjeta2", info: "Puedes sdsadsadsd tus tickets y llevarte increibles premios" },
    { id: "tarjeta3", info: "Lleva tu tardsadasdjeta a todas nuestras sucursales y seguir disfrutando de nuestro juegos" },
  ];



  return (
    <main>
      <NavBar />
      <div>
        <p>
          Bueno por aqui empezamos
        </p>
      </div>

      <section id='servicios'>

        <h2>Servicios</h2>

        <div className='card-grid'>
          {
            servicioiconos.map((iconos) => (
              <>

                <Servicios key={iconos.id} imagen={iconos.img} info={iconos.info} />
              </>
            ))

          }
        </div>

        <div>

        {
            tarjetainfo.map((tarjetas) => (
              <>

                <TarjetasServicios key={tarjetas.id} info2={tarjetas.info} />
              </>
            ))

          }

        </div>



      </section>
      <section>
        <Footer/>
      </section>
    </main>
  )
}
