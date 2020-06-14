import React from 'react'
import {
  Col, Card, CardImg, CardBody, CardLink,
  CardTitle, CardSubtitle,
  CardText,
} from 'reactstrap';
import './style.scss'
import Icons from '../../../../../Contants/icon'
import Images from '../../../../../Contants/image'

function Product() {
  return (
        <Col>
          <Card>
            <CardImg width="100%" src={Images.hongxiem} alt="Card image cap" />
           <div className="cart-body">
             <CardTitle className="out-of-stock">Hết hàng</CardTitle> 
             <CardTitle>Hồng xiêm Mặc Bắt</CardTitle>
             <CardSubtitle>37,000 VNĐ</CardSubtitle>
             <CardText className="price-sale">40,000 VNĐ</CardText>
           </div>
        
            <div className="card-footer">
              <div className="card-link">
                <CardLink href="#"><img src={Icons.viewIcon} /></CardLink>
                <CardLink style={{ borderRight: '1px solid #333333' }}></CardLink>
                <CardLink href="#"><img src={Icons.cartIcon} /></CardLink>
              </div>
            </div>
          </Card>
        </Col>

      // </Row>
      // <Row xs="12" className="toggle-product">
      //   <Col >
      //     <Button color="primary">Xem Thêm</Button>
      //   </Col>
      // </Row>
  )
}

export default Product;
