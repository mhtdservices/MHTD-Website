import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pompageSolaire from "../../images/pomageSolaire.jpg";
import chauffeEauSolaire from "../../images/chauffeeausolaire.jpg";
import energisSolaire from "../../images/energisSolaire.jpg";
import arrosageAutomatique from "../../images/arrosageAutomatique2.jpg";
import injectionReseau from "../../images/injectionReseau.jpg";
import hybride from "../../images/hybride.jpg";
import { HashLink } from "react-router-hash-link";





export default function Solutions() {

    return(
      <section id='solutions'>

        <Container className="text-center mt-5">
            <div>
            {/* <h3 className="mt-3" >MHTD</h3> */}
          <h3 className="mt-3">
            <span style={{ borderBottom: '4px solid yellow' }}>M</span>
            <span style={{ borderBottom: '4px solid green' }}>H</span>
            <span style={{ borderBottom: '4px solid blue' }}>T</span>
            <span style={{ fontSize: '1.5em' }}>D</span>
          </h3>
            <h2 className="mt-3" >Énergie Solaire et Arrosage Automatique</h2>
            </div>
            <hr class="my-4" />
            <h3 className="mt-3">Nos solutions</h3>
            <div className="d-flex flex-wrap justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pompageSolaire} />
          <Card.Body>
            <Card.Title>Pompage Solaire</Card.Title>
            <Card.Text>
              Chez MHTD, nous sommes déterminés à fournir des services de pompage solaire personnalisés, adaptés à vos besoins spécifiques en eau. 
            </Card.Text>
            <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/contact/#contactForm">
            <Button variant="primary">
            Installer Maintenant
              </Button></HashLink>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={chauffeEauSolaire} />
          <Card.Body>
            <Card.Title>Chauffe Eau Solaire</Card.Title>
            <Card.Text>
            MHTD met à votre disposition une gamme variée de chauffe-eaux solaires ajustés à vos besoins. Nous nous chargeons de l'installation, de la mise en service.
            </Card.Text>
              <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/contact/#contactForm"><Button variant="primary">Installer Maintenant</Button></HashLink>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={energisSolaire} />
          <Card.Body>
            <Card.Title>Eclairage Solaire</Card.Title>
            <Card.Text>
            Illuminez votre espace avec nos produits d'éclairages solaire de haute gamme, une solution écologique et économique durable. 
            </Card.Text>
            <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/contact/#contactForm"><Button variant="primary">Installer Maintenant</Button></HashLink>
          </Card.Body>
        </Card>
    
    </div>
    <div className="d-flex flex-wrap justify-content-around mt-3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={arrosageAutomatique} />
      <Card.Body>
        <Card.Title>Arrosage Automatique</Card.Title>
        <Card.Text>
        Transformez votre jardin en oasis florissante avec notre système d'arrosage automatique. 
        </Card.Text>
        <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/contact/#contactForm"><Button variant="primary">Installer Maintenant</Button></HashLink>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={injectionReseau} />
      <Card.Body>
        <Card.Title>Injection Au Reseau</Card.Title>
        <Card.Text>
          Le système d'injection au réseau vous permet d'utiliser l'électricité produite par le système d'énergie solaire pendant la journée et l'électricité du réseau la nuit.
        </Card.Text>
        <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/contact/#contactForm"><Button variant="primary">Installer Maintenant</Button></HashLink>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={hybride} />
      <Card.Body>
        <Card.Title>Systeme Hybride</Card.Title>
        <Card.Text>
        Découvrez l'efficacité et la polyvalence de notre système solaire hybride, une solution intelligente qui utilise des onduleurs et des batteries hybrides spéciaux pour stocker l'énergie pour une utilisation ultérieure.
        </Card.Text>
        <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/contact/#contactForm"><Button variant="primary">Installer Maintenant</Button></HashLink>
      </Card.Body>
    </Card>
    </div>
  </Container>
  </section>
        
    )
    
}