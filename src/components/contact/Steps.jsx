import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Steps() {
  return (
    <>
    <div className='text-white text-center d-flex flex-wrap justify-content-center align-items-center p-4 mt-3' style={{width:"600px", height:"750px"}}>
          <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header style={{ fontSize: '1.5em', color: 'black' }}>1</Card.Header>
        <Card.Body>
          <Card.Title>Remplissage du formulaire</Card.Title>
          <Card.Text>
          Veuillez compléter notre formulaire en ligne afin de nous transmettre les détails de votre projet.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="success" style={{ width: '18rem' }}>
        <Card.Header style={{ fontSize: '1.5em',color: 'green' }}>2</Card.Header>
        <Card.Body>
          <Card.Title>Contact à distance</Card.Title>
          <Card.Text>
            Notre équipe prendra contact avec vous afin d'échanger au sujet de votre projet et de répondre à toutes vos.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />    
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header style={{ fontSize: '1.5em',color: 'blue'}}>3</Card.Header>
        <Card.Body>
          <Card.Title>Visite technique</Card.Title>
          <Card.Text>
          Nous organiserons une visite technique afin de mieux appréhender votre projet et de vous présenter une solution sur mesure.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>

  
    </>
  );
}

export default Steps;
