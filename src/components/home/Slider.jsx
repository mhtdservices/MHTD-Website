import Carousel from 'react-bootstrap/Carousel';
import agricole from "../../images/agricole.jpg";
import arrosage from "../../images/arrosage.jpg";
import ongrid from "../../images/ongrid.jpg";

function Slider() {
  return (
    <section id='slider'>

    <Carousel data-bs-theme="dark"
    style={{ height: '100vh',
    zIndex: -1 }}>
      <Carousel.Item>
        <img
          className="d-block w-100 image-fluid"
          src={agricole} 
          alt="Pompage solaire"
          style={{ height: '100vh',
          zIndex: -1 }}
        />
        <Carousel.Caption className='mb-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color:"white"}} >
          <h1>Pompage Solaire</h1>
          <p>Installation d'un système rotatif de 10 panneaux de 400Wc</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image-fluid"
          src={arrosage} 
          alt="arrosage"
          style={{ height: '100vh',
          zIndex: -1 }}
        />
        <Carousel.Caption className='mb-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color:"white"}} >
          <h1>Arrosage Automatique</h1>
          <p>Installation de systeme d'arrosage automatique</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image-fluid"
          src={ongrid}
          alt="Third slide"
          style={{ height: '100vh' ,
          zIndex: -1}}

        />
        <Carousel.Caption className='mb-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color:"white"}} >
          <h1>Installation Raccordée</h1>
          <p>
          Installation raccordée au réseau de 14 panneaux 550Wc
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );

}

export default Slider;