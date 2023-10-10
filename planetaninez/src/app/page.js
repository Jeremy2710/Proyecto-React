import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import UncontrolledCarrousel from './components/Carrousel/UncontrolledCarrousel';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <UncontrolledCarrousel/>
      <div>
        <p>
          Bueno por aqui empezamos
        </p>
      </div>
    </main>
  )
}
