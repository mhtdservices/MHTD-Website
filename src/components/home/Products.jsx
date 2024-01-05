import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { productsData } from '../../data';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <section id='products'>
    <Container>
    <hr class="my-4" />

<h3 className="mt-3 text-center">Boutique Solaire</h3>
<p>
Chez MHTD, nous sommes fiers de présenter notre gamme de produits allant des panneaux solaires aux onduleurs, en passant par les accessoires essentiels.
</p>
    <Row xs={1} md={3} className="g-4 mt-3">
      {productsData.map((product, index) => (
        <Col key={product.id}>
          <Card
            onClick={() => console.log("bismi lah")}
            style={{ cursor: 'pointer' }}
          >
            <Card.Img variant="top" src={product.imgurl} style={{ width: '100%', height: '200px' }} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.discreption}</Card.Text>
                <Link style={{textDecoration:'none',color: 'blue'}} to={`/ProductDetails/${product.id}`}>En savoir plus {">>"}</Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    </section>
  );
}

export default Products;
