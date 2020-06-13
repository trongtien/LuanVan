import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CartList from '../../components/CartList'
import CartBill from '../../components/CartBill'

function MainPage(props) {
  return (
    <Container fluid={true}>
      <Row style={{ marginTop: '3%', marginBottom: '3%', padding: "15px" }}>
        <Col lg='8'> <CartList /> </Col>
        <Col lg='4'> <CartBill /> </Col>
      </Row>
    </Container>
  );
}

export default MainPage;

