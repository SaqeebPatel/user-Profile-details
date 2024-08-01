
import React from 'react';
import './Home.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
  { id: 1, img: 'https://images.unsplash.com/photo-1589894404892-7310b92ea7a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Vivo', description: 'Vivo Communication Technology', price: "10" },
  { id: 2, img: 'https://images.unsplash.com/photo-1517765371796-5bd3a7d30a29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Oppo', description: 'Oppo Communication Technology', price: "10" },
  { id: 3, img: 'https://images.unsplash.com/photo-1597415581463-4b7a5a87be62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'MI', description: 'MI Communication Technology', price: "10" },
  { id: 4, img: 'https://images.unsplash.com/photo-1510166089176-b57564a542b1?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Realme', description: 'Realme Communication Technology', price: "10" },
  { id: 5, img: 'https://images.unsplash.com/photo-1673718423582-f3378102c0d7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D', name: 'iPhone', description: 'iPhone Communication Technology', price: "10" },
];

function Home({ addToCart }) {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <Container fluid className="home-content">
          <Row>
            {products.map(product => (
              <Col key={product.id} md={4}>
                <Card className="my-3">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;

