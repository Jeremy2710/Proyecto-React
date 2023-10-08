import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
// import Servicios from './components/Servicios'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {

  const servicioiconos = [
    { id: "icono1", img: "", info: "Contamos con una gran variedad juegos para divertirse en familia." },
    { id: "icono2", img: "", info: "Puedes canjear tus tickets y llevarte increibles premios" },
    { id: "icono3", img: "", info: "Lleva tu tarjeta a todas nuestras sucursales y seguir disfrutando de nuestro juegos" },
    { id: "icono4", img: "", info: "Dentro del establecimiento, tenemos locales de comida rapida con un amplio menú" }
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

        {
          servicioiconos.map(iconos => (

            <Servicios key={iconos.id} img={iconos.img} info={iconos.info}  />

          ))

        }


      </section>
    </main>
  )
}
