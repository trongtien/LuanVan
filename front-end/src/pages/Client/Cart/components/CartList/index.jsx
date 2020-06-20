import React from 'react'
import './style.scss'
import { Table, CardImg, Input } from 'reactstrap';
import Icon from './../../../../../Contants/icon'

function ListCardComponent() {
  return (
    <Table  responsive>
      <thead>
        <tr>
          <th>STT</th>
          <th>Hình Ảnh</th>
          <th>Tên Sản Phẩm</th>
          <th>Đơn Giá</th>
          <th>Số Lượng</th>
          <th>Thành Tiền</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr className="list-cart-product">
          <th scope="row">1</th>
          <td> <CardImg center width="100%" src={Icon.deleteIcon} className="image-cart" /></td>
          <td>Otto</td>
          <td>@mdo</td>
          <td> <Input readonly/></td>
          <td>@mdo</td>
          <td><CardImg center width="100%" src={Icon.deleteIcon} className="icon-cart" /></td>
        </tr>
      </tbody>
    </Table>
  )
}
export default ListCardComponent
