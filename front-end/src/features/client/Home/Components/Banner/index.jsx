import React from 'react'
import Icons from '../../../../../Contants/icon'
import { Row, Col, Card, Button, CardTitle, CardText, CardSubtitle, CardBody, Container } from 'reactstrap';
import './style.scss'

function Banner() {
  return (
    <div className="banner">
        <Container fluid={true}>
            <Row xs="3">
                <Col className="banner-content">
                        <CardText><img src={Icons.shieldIcon}/></CardText>
                        <CardBody>
                            <CardTitle >Chất lượng</CardTitle>
                            <CardText>Chất lượng đảm bảo, an toàn</CardText>
                        </CardBody>
                </Col>
                <Col className="banner-content">
                        <CardText><img src={Icons.calendarIcon}/></CardText>
                        <CardBody>
                            <CardTitle>Hình thức làm việc</CardTitle>
                            <CardText>Hỗ trợ 24/7, phản hồi nhanh chóng</CardText>
                        </CardBody>
                </Col>
                <Col className="banner-content">
                        <CardText><img src={Icons.deliveryTruck}/></CardText>
                        <CardBody>
                            <CardTitle>Vận chuyển</CardTitle>
                            <CardText>Ship hàng toàn quốc</CardText>
                        </CardBody>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner;