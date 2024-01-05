import { Container } from "react-bootstrap";
import warranty from "../../images/warranty.jpg"


export default function WarrantyPolicy() {

    return(
        <>
        <div
            style={{
                backgroundImage: `url(${warranty})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '80vh', 
            }}>            
        </div>
    <Container>
        <h1>Politique de Garantie:</h1>
        <p>Chez MHTD, notre objectif principal est d'assurer que votre expérience d'achat soit entièrement satisfaisante. 
                C'est pourquoi la majorité de nos produits bénéficient de garanties. </p>
        <p>Les conditions de garantie sont spécifiées dans le devis estimatif, il varie en fonction du fabricant et du type de produit. 
                À titre indicatif, Voici un aperçu de notre politique de garantie pour vous assurer une satisfaction totale : </p>
        <h2>Les panneaux solaires :</h2>
        <ol>
            <li>Une garantie d'usine de 10 ans.</li>
            <li>Une garantie performance de 25 ans.</li>
        </ol>
        <h2> examples garantie d'usine :</h2>
        <ul>
            <li><a href="https://www.jinkosolar.com/uploads/JinkoSolar-Global%20Limited%20Warranty%20(Rev112318)-EN.pdf" target="_blank" rel="noopener noreferrer">Jinko Solar</a></li>
            <li><a href="https://www.jasolar.com/uploadfile/2018/0518/20180518102313951.pdf" target="_blank" rel="noopener noreferrer">Ja Solar</a></li>
        </ul>

        <h2>Onduleurs solaires :</h2>
        <p>1 ans de garantie.</p>

        <h2>Date du début de la garantie</h2>
        <p>
            C'est la date d'installation du/des produit(s) ou 1 mois après la livraison du/des produit(s) à l'acheteur.
        </p>
        <h2>Modifications de la Politique de Garantie</h2>
        <p>MHTD se réserve le droit de modifier cette politique de garantie à tout moment. 
            Toute modification sera publiée sur notre site web avec indication de la date d'effet.</p>            
        </Container>
 
        </>
 
    )
    
}