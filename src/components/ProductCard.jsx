import React from 'react'
import {
   Col,
   Rate,
   Row,
   Typography
} from 'antd'

export default function ProductCard({ product }) {
   return (
      <div style={{
         background: '#f6f6f6',
         borderRadius: '15px',
         overflow: 'hidden',
         boxShadow: '0 2px 4px #0003',
      }}>
         <img
            src={product.img}
            alt={product.name}
            width={'100%'}
         />
         <div style={{ padding: '10px' }}>
            <Typography>{product.name}</Typography>
            <Rate allowHalf defaultValue={product.rating} />
            <Row justify='space-between'>
               <Col>{product.totalSale} Sales</Col>
               <Col>$ {product.price}</Col>
            </Row>
         </div>
      </div>
   )
}
