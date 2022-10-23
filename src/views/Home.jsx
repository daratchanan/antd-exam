import React from 'react'
import {
   Breadcrumb,
   Button,
   Col,
   Row,
   Typography
} from 'antd';
import ProductCard from '../components/ProductCard';


const categories = [
	{
		key: 'all',
		value: 'all'
	},
	{
		key: 'photography',
		value: 'photography'
	},
	{
		key: 'games',
		value: 'games'
	},
	{
		key: 'metaverse',
		value: 'metaverse'
	},
	{
		key: 'music',
		value: 'music'
	},
	{
		key: 'memes',
		value: 'memes'
	},
	{
		key: 'virtual world',
		value: 'virtual world'
	},
	{
		key: 'top week',
		value: 'top week'
	},
	{
		key: 'collection',
		value: 'collection'
	},
	{
		key: 'art',
		value: 'art'
	},
];

const products = [
	{
		img: 'https://i.seadn.io/gcs/files/8d4dec181aa965e64455d178bf6138e7.png?auto=format&w=3840',
		name: 'JENNIE HUMAN CHANEL BY 8LACKPINK',
		rating: 3,
		totalSale: 378,
		price: 50
	},
	{
		img: 'https://i.seadn.io/gcs/files/f2b0607fd8c70ab0eed6736c7d4d4e29.png?auto=format&w=3840',
		name: 'JISOO BY 8LACKPINK',
		rating: 4,
		totalSale: 478,
		price: 60
	},
	{
		img: 'https://i.seadn.io/gae/gLelqCp_C4Tn_-F7pw1IH4waPSYuf0Nn8O4msugmtrWndkivOcAsqkKa7sNYO7CWhjyZ9Kz5NpD2-YIpQdG4MLIAXpXWvsqW3wmT?auto=format&w=384',
		name: 'JISCO #487',
		rating: 3.5,
		totalSale: 500,
		price: 54
	},
	{
		img: 'https://i.seadn.io/gcs/files/3776dbd44f3b34e72784856cd4da3a65.jpg?auto=format&w=3840',
		name: 'YuGiYn',
		rating: 3,
		totalSale: 378,
		price: 50
	},
	{
		img: 'https://i.seadn.io/gcs/files/79c5a4cf5631a8c10453f2d7b6786da3.jpg?auto=format&w=3840',
		name: 'Nyolings',
		rating: 4,
		totalSale: 350,
		price: 60
	},
	{
		img: 'https://i.seadn.io/gae/VlwngAwLusLHCfFpb3zJGjtoo19ZL26aQkkyVePk9E2yHr5YgUr_r0OGzjvpOvToID3f1F6mtysNS9EUtADMe8CggITQoNnBSIYk?auto=format&w=384',
		name: 'The Chimpsons Official',
		rating: 3,
		totalSale: 400,
		price: 60
	},
]


export default function Home() {
   return (
      <div>
         <Breadcrumb
            style={{
               margin: '16px 0',
            }}
         >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Explore</Breadcrumb.Item>
            <Breadcrumb.Item>Explore Page 1</Breadcrumb.Item>
         </Breadcrumb>
         <Typography.Title level={1}>Explore Now</Typography.Title>

         <Row gutter={[10, 10]} style={{ marginBottom: '19px' }}>
            {categories.map(cat =>
               <Col key={cat.key}>
                  <Button
                     type='primary'
                     shape='round'
                  >{cat.value}
                  </Button>
               </Col>
            )}
         </Row>

         <Row gutter={[16, 16]}>
            {products.map((p, idx) =>
               <Col xs={24} sm={12} md={8} lg={6} key={idx}>
                  <ProductCard product={p} />
               </Col>
            )}
         </Row>
      </div>
   )
}
