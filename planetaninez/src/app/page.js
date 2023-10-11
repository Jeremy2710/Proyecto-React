import Image from 'next/image'
import styles from './page.module.scss'
import Navbar from './components/Navbar'
import Servicios from './components/Servicios'
import planetaninez from '../../public/planetaninez.png'


export default function Home() {

  const servicioiconos = [
    { id: "icono1", img: planetaninez, info: "Contamos con una gran variedad juegos para divertirse en familia." },
    { id: "icono2", img: planetaninez, info: "Puedes canjear tus tickets y llevarte increibles premios" },
    { id: "icono3", img: planetaninez, info: "Lleva tu tarjeta a todas nuestras sucursales y seguir disfrutando de nuestro juegos" },
    { id: "icono4", img: planetaninez, info: "Dentro del establecimiento, tenemos locales de comida rapida con un amplio menú" }
  ];



  return (
    <main>
      <Navbar />
      <div>
        <p>
          Bueno por aqui empezamos
        </p>
      </div>

      <section>

      <h2>Servicios</h2>

        {
          servicioiconos.map((iconos) => (
            <>

              <Servicios key={iconos.id} imagen={iconos.img} info={iconos.info} />
            </>
          ))

        }


      </section>
    </main>
  )
}
