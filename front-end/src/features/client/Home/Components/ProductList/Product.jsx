import React from 'react'
import './style.scss'
import Icons from '../../../../../Contants/icon'
import Images from '../../../../../Contants/image'
import {
  Row, Col, Card, CardImg, CardBody, CardLink,
  CardTitle, CardSubtitle,
  Button,
  CardText,
  Container
} from 'reactstrap';

function Product() {
  return (
    <Container className="product " fluid={true} style={{ marginTop: '10px' }}>
      <div className="a-center">
        <h2><span>TRÁI CÂY SẠCH</span></h2>
      </div>
      <Row xs="4">
        <Col>
          <Card>
            <CardImg width="100%" src={Images.hongxiem} alt="Card image cap" />
            <CardBody>
              <CardTitle className="out-of-stock">Hết hàng</CardTitle> 
              <CardTitle>Hồng xiêm Mặc Bắt</CardTitle>
              <CardSubtitle>37,000 VNĐ</CardSubtitle>
              <CardText className="price-sale">40,000 VNĐ</CardText>
            </CardBody>
            <CardBody className="card-footer">
              <div className="card-link">
                <CardLink href="#"><img src={Icons.viewIcon} /></CardLink>
                <CardLink style={{ borderRight: '1px solid #333333' }}></CardLink>
                <CardLink href="#"><img src={Icons.cartIcon} /></CardLink>
              </div>
            </CardBody>
          </Card>
        </Col>

      </Row>
      <Row xs="12" className="toggle-product">
        <Col >
          <Button color="primary">Xem Thêm</Button>
        </Col>
      </Row>
    </Container>

    
  )
}

export default Product;
