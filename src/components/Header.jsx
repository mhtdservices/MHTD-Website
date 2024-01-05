import { Container } from "react-bootstrap";
import whatsapp from "../images/whatsapp.png";
import phoneIcon from "../images/telephone.png";
import '../App.css';

export default function Header() {
  const phoneNumber = '+212626425469';

  return (
    <Container className="d-flex justify-content-between"
     >
      <a
        href={`tel:${phoneNumber}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>
        <img src={phoneIcon} alt="phoneIcon" />
        {phoneNumber}
      </a>

      <a
        href={`https://wa.me/${phoneNumber}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 1,
          animation: 'bounce 1.5s infinite',
        }}
        target="_blank"
      >
        <img src={whatsapp} alt="whatsapp" />
      </a>
    </Container>
  );
}
