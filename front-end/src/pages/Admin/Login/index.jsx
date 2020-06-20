import React from 'react'
import './style.scss'
import {
  Row,
  Container,
  Col,
  Card,
  Button,
  FormGroup,
  Label,
  Input,
  Form
} from "reactstrap";

function Login() {
  return (
    <Container fluid={true} >
        <div className="form-login-admin"  >
          <Row>
            <Col style={{background:'#ffa233', height: '665px'}}>
              <Col lg="5" style={{marginLeft: "27%",marginRight: "27%", marginTop: "10%"}}>
              <Card >
                <div className="form-auth">
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
                      <div style={{textAlign: 'center'}}>
                        <Button >Đăng Nhập </Button>
                      </div>
                    </Form>
                </div>
              </Card>
            </Col>
            </Col>
          </Row>
        </div>
    </Container>

  )
}
export default Login;
