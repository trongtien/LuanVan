import React from 'react'
import './style.scss'
import Icons from '../../../../../Contants/icon'
import {
  Row, Col, Card, CardImg, CardBody, CardLink,
  CardTitle, CardSubtitle,
  Button,
  CardText
} from 'reactstrap';

function Product() {
  return (
    <div className="product" style={{ marginTop: '10px' }}>
      <Row xs="4">
        <Col>
          <Card>
            <CardImg width="100%" src={Icons.viewIcon} alt="Card image cap" />
            <CardBody>
              <CardTitle className="out-of-stock">Tạm thời hết hàng</CardTitle> 
              <CardTitle>Tên sản phẩm</CardTitle>
              <CardSubtitle>2.000.000</CardSubtitle>
              <CardText className="price-sale">2.000.000</CardText>
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
    </div>
  )
}

export default Product;
