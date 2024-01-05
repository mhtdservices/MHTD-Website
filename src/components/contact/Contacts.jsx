import { Container } from "react-bootstrap";
import contactImage from "../../images/contactImage.jpg"
import Steps from "./Steps";
import ContactForm from "./ContactForm";
import WorkDetails from "./Workdetails";



export default function Contact() {

    return(
        <>
        <div className="d-flex flex-column justify-content-center p-4 mt-3"
        style={{
            backgroundImage: `url(${contactImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '80vh', 
        }}>
            <h2 className="text-white mt-3"  ><span style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>CONSULTATION GRATUITE !l</span></h2>
            <h3 className="text-white mt-3"  ><span style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', textTransform:"uppercase"}}>N'hésitez pas à nous contacte.</span></h3>
            

        </div>
        <Container className=" text-center p-4">
            <h1>Bénéficiez de notre expertise</h1>
            <p>Notre équipe dédiée est prête à vous accompagner à chaque étape, de la conception à la réalisation.</p>
            <p> Faisons de votre vision une réalité durable ensemble.</p>
        </Container>
        <Container className="d-flex flex-wrap justify-content-around text-center text-lg-start p-4" >
            <Steps/>
            <ContactForm />
        </Container>
        <WorkDetails/>
        </>
        
    )
    
}