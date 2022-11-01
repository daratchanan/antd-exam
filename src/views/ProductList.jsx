import { Col, Row } from 'antd';
import React from 'react';
import ProfileCard from '../components/ProfileCard';


export default function ProductList({ products }) {
   return (
      <Row gutter={[24, 24]}>
         {products.map(item =>
            <Col xs={24} sm={12} md={4} key={item.name}>
               <ProfileCard card={item} />
            </Col>
         )}
      </Row>
   )
}
