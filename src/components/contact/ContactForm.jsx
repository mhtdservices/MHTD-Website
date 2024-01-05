import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useRef } from "react";
import emailjs from 'emailjs-com';


export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_30shd0a', 'template_n3jcvdm', form.current, 'GHgi6dmsbELEHwaE5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return(
        <>
        
    <div className="p-5" id="contactForm"  style={{width:"600px", height:"750px"}}>
        <Form className='contact-form' ref={form} onSubmit={sendEmail}>
          <Col>
            <Col className='mt-3' >
                *
                <Form.Control name="name" type="text" placeholder="Nom et Prenom" required />
            </Col>
            <Col className='mt-3' >
                *
                <Form.Control name="email" type="email" placeholder="Adresse email" required />
            </Col>
            <Col className='mt-3' >
                *
                <Form.Control name="number" type="number" placeholder="Num Tel" required />
        </Col>    
          </Col>
          <Col className='mt-3'>
          <Form.Select  name="subject" aria-label="Nos Solutions">
            <option>Nos Solutions</option>
            <option value="Pompage Solaire">Pompage Solaire</option>
            <option value="Chauffe Eau Solaire">Chauffe Eau Solaire</option>
            <option value="Eclairage Solaire">Eclairage Solaire</option>
            <option value="Arrosage Automatique">Arrosage Automatique</option>
            <option value="Injection Au Reseau">Injection Au Reseau</option>
            <option value="Systeme Hybride">Systeme Hybride</option>
        </Form.Select>
          </Col>
            <Col className='mt-3'>
              <Form.Control name="message" as="textarea" placeholder="Votre message" />
            </Col>
          <div className='btn-holder'>
            <Button className='mt-3' type="submit" value="Send" >Envoyer</Button>
          </div>
        </Form>
        <p>*: champs obligatoire</p>
      </div>
        </>
    )
    
}