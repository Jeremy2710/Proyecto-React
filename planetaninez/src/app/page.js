import 'bootstrap/dist/css/bootstrap.min.css'
import Testimonials from './components/Testimonials'
import BetaCarrousel from './components/Carrousel/page'
import Navbar from './components/NavbarContainer/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <BetaCarrousel/>
      <div>
        <Testimonials/>
        <p>
          Bueno por aqui empezamos
        </p>
      </div>
    </main>
  )
}
