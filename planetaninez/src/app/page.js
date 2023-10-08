import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <p>
          Bueno por aqui empezamos
        </p>
      </div>

      <section>
        <Container>

          <h2>Servicios</h2>
          <Row>

            <Col>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}
