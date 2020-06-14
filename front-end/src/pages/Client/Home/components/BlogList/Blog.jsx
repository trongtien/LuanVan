import React from 'react'
import { Row, Col, Button, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import './style.scss'

function Blog() {
  return (
    <Row xs="3">
      <Col >
          <div className="cart-body">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardSubtitle>With supporting text below as a natural lead-in to additional content.</CardSubtitle>
            <CardText>Ngày giờ đăng bài </CardText>
            <Button>Xem thêm </Button>
          </div>
      </Col>

      <Col >
          <div className="cart-body">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardSubtitle>With supporting text below as a natural lead-in to additional content.</CardSubtitle>
            <CardText>Ngày giờ đăng bài </CardText>
            <Button>Xem thêm </Button>
          </div>
      </Col>
      <Col >
          <div className="cart-body">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardSubtitle>With supporting text below as a natural lead-in to additional content.</CardSubtitle>
            <CardText>Ngày giờ đăng bài </CardText>
            <Button>Xem thêm </Button>
          </div>
      </Col>
    </Row>
      
      // <Row xs="12" className="toggle-blog">
      //   <Col >
      //     <Button color="primary">Xem Thêm</Button>
      //   </Col>
      // </Row>
  )
}

export default Blog;