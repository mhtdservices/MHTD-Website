import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { productsData } from '../../data';



export default function PrductDetails() {
    

    const params = useParams()
    console.log(params)
    let id ;
    let title;
    let discreption;
    let featrues;
    let imgurl;
    for (let index = 0; index < productsData.length; index++) {
        const element = productsData[index];
        // console.log(element)
        id = element.id;
        if (params.id == id) {
            
            title = element.title;
            discreption = element.discreption;
            featrues = element.featrues;
            imgurl = element.imgurl;
            
        }
        console.log("element not found")
        
        
    }
    const phoneNumber = '+212626425469';
    const message = 'Bonjour! Je suis intéressé par le ' + title;
    const encodedMessage = encodeURIComponent(message);
  
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return(
        <>

        <div className="d-flex flex-wrap mt-5">
    <div className='mt-3 mb-2 col-md-4 mx-auto text-center'>
    <h2 className='mt-3'>{title}</h2>
    <p className='mt-3'>{discreption}</p>
    <p className='mt-3'>{featrues}</p>
    <Button className='mt-3' variant="primary" onClick={() => window.open(whatsappLink, '_blank')}>Obtenir</Button>
    </div>

        <img
            className="d-block w-100 image-fluid col-md-6 ms-auto me-0"
            src={imgurl}
            style={{ maxWidth: '600px', maxHeight: '400px' }}
            alt="Second slide"
        />
    </div>

        </>
    )
}