import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import goals from "../../images/background.jpg"

function ValuesSection() {

    const elements = [
        'Primary',
        'Success',
        'Info',
      ]
  const values = [
        {
        id:1,
        header:"Expertise",
        title: "Expertise en Énergies Renouvelables",
        discreption: "MHTD se distingue par son expertise dans le domaine des énergies renouvelables. Forte de nombreuses années d'expérience, l'entreprise offre des produits et services de haute qualité pour répondre aux besoins changeants du marché.",
        color:'Primary',
          },
        {
        id:2,
        header:"Service",
        title: "Service Client Exceptionnel",
        discreption: "L'équipe de MHTD est prête à répondre aux besoins spécifiques de chaque client, assurant une expérience personnalisée à chaque étape, de la consultation initiale à l'installation et au service après-vente",
        color:'Success',
          },
        {
        id:3,
        header:"Durabilité Environnementale",
        title: "Engagement envers la Durabilité Environnementale",
        discreption: "MHTD s'engage pleinement en faveur de la durabilité environnementale. Ses solutions, telles que les chauffe-eau solaires et autres produits, sont conçues pour minimiser l'impact écologique tout en offrant des avantages économiques à long terme.",
        color:'Info',
          },
        ]
  return (
    <>
    <section id='values'>
        <div 
        className='text-white text-center d-flex flex-wrap justify-content-center align-items-center p-4 mt-3'  
        style={{
                backgroundImage: `url(${goals})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '80vh', 
            }}>
        <h2 className="mt-3 color" >Énergie Solaire et de l'Arrosage Automatique</h2>
        <p className="m-4 mt-3" >Bienvenue chez MHTD, votre partenaire de confiance dans le domaine de l'énergie solaire et de l'arrosage automatique au Maroc. 
                Forts de notre engagement envers l'innovation durable, nous sommes fiers de proposer des solutions énergétiques modernes et 
                des systèmes d'arrosage intelligents pour répondre aux besoins croissants de nos clients.
        </p>
        {values.map((variant) => (
        <Card
          bg={variant.color.toLowerCase()}
          key={variant.id}
          text={variant.color.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="m-5"
        >
          <Card.Header>{variant.title}</Card.Header>
          <Card.Body>
            {/* <Card.Title>{variant.title}</Card.Title> */}
            <Card.Text>
              {variant.discreption}
            </Card.Text>
          </Card.Body>
        </Card>

      ))}
        </div>
      </section>

    </>
  );
}

export default ValuesSection;
