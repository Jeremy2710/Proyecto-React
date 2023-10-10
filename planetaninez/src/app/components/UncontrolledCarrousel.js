import Carousel from 'react-bootstrap/Carousel';
import Ocean from '../../../public/oceano.jpg';
import Tormenta from '../../../public/tormenta.jpg';
import ViaLactea from '../../../public/vialactea.jpg';

function UncontrolledCarrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Ocean text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Tormenta text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ViaLactea text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledCarrousel