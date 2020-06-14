import React, { useState } from 'react'

import './style.scss'
import {
  CardText, CardBody,
  CardTitle
} from 'reactstrap';


function MenuComponent(props) {
  const [isProduct, setIsProduct] = useState(false)
  const [isNcc, setIsNcc] = useState(false)
  const [isProductType, setIsProductType] = useState(false)
  const [isOrder, setIsOrder] = useState(false)
  function handlClickProduct(){
    setIsProduct(!isProduct)
  }
  function handlClickNcc(){
    setIsNcc(!isNcc)
  }
  function handlClickProductType(){
    setIsProductType(!isProductType)
  }
  function handlClickOrder(){
    setIsOrder(!isOrder)
  }
  return (
      <div>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardTitle>Admin</CardTitle>
        <CardText>DashBore</CardText>
        <CardText  onClick={() => handlClickProduct()} >Sản Phẩm</CardText>
        <CardBody className= {isProduct ===true ? 'active': ''}>
          <CardText>Danh Sách</CardText>
          <CardText>Thêm Sản phẩm</CardText>
        </CardBody>

        <CardText onClick={() => handlClickNcc()}>Nhà Cung Cấp</CardText>
        <CardBody className= {isNcc ===true ? 'active': ''}>
          <CardText>Danh sách nhà cung cấp</CardText>
          <CardText>Thêm Nhà cung cấp</CardText>
        </CardBody>

        <CardText onClick={() => handlClickProductType()}>Phân loại</CardText>
        <CardBody className= {isProductType ===true ? 'active': ''}>
          <CardText>Danh sách </CardText>
          <CardText>Thêm Loại Sản Phẩm</CardText>
        </CardBody>

        <CardText onClick={() => handlClickOrder()}>Đon hàng</CardText>
        <CardBody className= {isOrder ===true ? 'active': ''}>
          <CardText>Danh sách </CardText>
          <CardText>Đơn đã xác nhận</CardText>
          <CardText>Đơn hàng hủy</CardText>
          <CardText>Đơn hàng đã giao</CardText>
        </CardBody>

      </div>

  )
}
export default MenuComponent;
