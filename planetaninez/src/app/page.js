import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <main>
      <Navbar/>
      <div>
        <p>
          Bueno por aqui empezamos
        </p>
      </div>
    </main>
  )
}
