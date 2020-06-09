import React from 'react'
import PropTypes from "prop-types";
import {
  Row,
  Container,
  Col,
  Card,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input,
  Form
} from "reactstrap";
import Backgroud from './assets/image/background-login.jpg'

function Auth() {
  return (
    <Container fluid={true} >
        <div className="form-login-admin"  >
          <Row>
            <Col style={{background:'#ffa233', height: '665px'}}>
              <Col lg="5" style={{marginLeft: "27%",marginRight: "27%", marginTop: "10%"}}>
              <Card >
                <CardBody>
                  <div className="login-title" style={{textAlign: 'center'}}>
                    <h1>Admin</h1>
                  </div>
                    <Form>
                      <FormGroup>
                        <Label for="exampleUsername">Username</Label>
                        <Input
                          type="text"
                          name="username"
                          id="exampleUsername"
                          placeholder="username placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="password placeholder"
                        />
                      </FormGroup>
                      <CardBody style={{textAlign: 'center'}}>
                        <Button >Đăng Nhập </Button>
                      </CardBody>
                    </Form>
                </CardBody>
              </Card>
            </Col>
            </Col>
          </Row>
        </div>
    </Container>

  )
}
export default Auth;
