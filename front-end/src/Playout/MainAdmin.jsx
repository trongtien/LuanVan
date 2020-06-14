import React from 'react'
import {
  Row,
  Container,
  Col,
} from "reactstrap";

import MenuComponent from '../components/Admin/MenuComponent/MenuComponent'
import HeaderComponent from '../components/Admin/HeaderComponent/HeaderComponent'

// function MainAdmin() {
//   return (
//     <Container fluid={true}>
//       <Row>
//         <Col xs="2" ><MenuComponent/></Col>
//         <Col xs="10">
//           <HeaderComponent/>
//         </Col>
//       </Row>
//     </Container>
//   )
// }
// export default MainAdmin
export default ({children}) => {
  return (
      <div>
        <Container fluid={true}>
          <Row>
            <Col xs="2" ><MenuComponent/></Col>
            <Col xs="10">
              <HeaderComponent/>
              {children}
            </Col>
          </Row>
        </Container>
      </div>
  )
}


