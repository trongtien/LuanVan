import React from 'react'
import { Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

import './style.scss'

function ResisterForm() {
  return (
    <div className="form-resister">
      <Row>
        <Col lg='7'>
          <Card>
            <div >
              <h1>Tạo Tài Khoản</h1>
              <Form className="reister-detail">
                <FormGroup>
                  <Label for="exampleFullName">FullName</Label>
                  <Input type="text" name="fullname" id="exampleFullName" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleUsername">Username</Label>
                  <Input type="text" name="username" id="exampleUsername" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePhone">Số diện thoại</Label>
                  <Input type="text" name="phone" id="examplePhone" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress">Địa chỉ</Label>
                  <Input type="text" name="address" id="exampleAddress" placeholder="with a placeholder" />
                </FormGroup>
                <div >
                  <Button>Đăng Ký </Button>
                  <Link to="/">Trở về cửa hàng</Link>
                </div>
              </Form>
            </div >
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ResisterForm;