import mhtdlog from "../images/mhtdlogo.jpg";
import { HashLink  } from 'react-router-hash-link';

export default function Footer() {
    return(
<div>

  <footer style={{ backgroundColor: '#f8f9fa' }} className="text-center text-lg-start">
    
    <div  className="container d-flex justify-content-around p-4">
      <div className="row my-4">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

          <div className=" shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto">
            <img src={mhtdlog} height="70" alt=""
                 loading="lazy" />
          </div>

          <p className="text-center">MHTD entreprise marocaine spécialisée en énergie solaire et arrosage automatique</p>

          <ul className="list-unstyled d-flex flex-row justify-content-center">
          <li>
            <a  href="https://www.facebook.com/mhtdservices?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square"  style={{ fontSize: '2em' }}></i>
            </a>
          </li>
          </ul>

        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Presentation</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
            <HashLink style={{textDecoration:'none',color: 'black'}} to="/">Accueil</HashLink>
            </li>
            <li className="mb-2">
            <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/contact/#contactForm">Consultation</HashLink>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Services</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
            <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/#solutions">Solutions</HashLink>
            </li>
            <li className="mb-2">
            <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/#products">Boutique</HashLink>
            </li>
            <li className="mb-2">
            <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/WarrantyPolicy">Politique de Garantie</HashLink>
            </li>
          </ul>
        </div>


        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Contact</h5>

          <ul className="list-unstyled">
            <li>
              <p><i className="fas fa-map-marker-alt pe-2"></i>HAY ENNASSER, Sidi Allal el Bahraoui 15252</p>
            </li>
            <li>
              <p><i className="fas fa-phone pe-2"></i>+212 626425469</p>
            </li>
            <li>
              <p><i className="fas fa-envelope pe-2 mb-0"></i>mhtdservices@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center" style={{ backgroundColor: '#E3EAF2' }} > 
    Copyright MHTD © 2024 | <n />
    <a  style={{textDecoration:'none', color:"black", }} href="https://hydroprogammer.com/" target="_blank" rel="noopener noreferrer">
  zakria zinedine
  </a>
</div>

  </footer>

</div>
    )
}