import React from 'react'
import {
	Avatar,
	Button,
	Col,
	Input,
	Row,
	Space,
	Tabs,
	Typography
} from 'antd';
import {
	SearchOutlined,
	BarsOutlined,
	AppstoreFilled
} from '@ant-design/icons';
import ProductList from './ProductList';

const products = [
	{
		img: 'https://i.seadn.io/gcs/files/8d4dec181aa965e64455d178bf6138e7.png?auto=format&w=3840',
		name: 'JENNIE HUMAN CHANEL BY 8LACKPINK',
		rating: 3,
		totalSale: 378,
		price: 50,
		categories: 'animal',
		qty: 20,
		type: 'collected'
	},
	{
		img: 'https://i.seadn.io/gcs/files/f2b0607fd8c70ab0eed6736c7d4d4e29.png?auto=format&w=3840',
		name: 'JISOO BY 8LACKPINK',
		rating: 4,
		totalSale: 478,
		price: 60,
		categories: 'samuri',
		qty: 14,
		type: 'created'
	},
	{
		img: 'https://i.seadn.io/gae/gLelqCp_C4Tn_-F7pw1IH4waPSYuf0Nn8O4msugmtrWndkivOcAsqkKa7sNYO7CWhjyZ9Kz5NpD2-YIpQdG4MLIAXpXWvsqW3wmT?auto=format&w=384',
		name: 'JISCO #487',
		rating: 3.5,
		totalSale: 500,
		price: 54,
		categories: 'far',
		qty: 18,
		type: 'favorited'
	},
	{
		img: 'https://i.seadn.io/gcs/files/3776dbd44f3b34e72784856cd4da3a65.jpg?auto=format&w=3840',
		name: 'YuGiYn',
		rating: 3,
		totalSale: 378,
		price: 50,
		categories: 'hollo',
		qty: 25,
		type: 'created'
	},
	{
		img: 'https://i.seadn.io/gcs/files/79c5a4cf5631a8c10453f2d7b6786da3.jpg?auto=format&w=3840',
		name: 'Nyolings',
		rating: 4,
		totalSale: 350,
		price: 60,
		categories: 'mary',
		qty: 12,
		type: 'favorited'
	},
	{
		img: 'https://i.seadn.io/gae/VlwngAwLusLHCfFpb3zJGjtoo19ZL26aQkkyVePk9E2yHr5YgUr_r0OGzjvpOvToID3f1F6mtysNS9EUtADMe8CggITQoNnBSIYk?auto=format&w=384',
		name: 'The Chimpsons Official',
		rating: 3,
		totalSale: 400,
		price: 60,
		categories: 'sam gi',
		qty: 22,
		type: 'collected'
	},
];


export default function Explore() {

	const collected = products.filter(f => f.type === 'collected');
	// console.log('collected =>', collected);

	const created = products.filter(f => f.type === 'created');
	// console.log('created => ', created);

	const favorited = products.filter(f => f.type === 'favorited');

	return (
		<Row>
			<Col xs={24} >
				<div style={{
					position: 'relative',
					backgroundImage: "url('https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2742&q=80')",
					height: '200px',
					width: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
					<Avatar src='https://media.istockphoto.com/photos/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised-picture-id1361394182?b=1&k=20&m=1361394182&s=170667a&w=0&h=cW_NDV-D-jrWBVcEPclIU9vRipFQZQC0armvGMN7w-c='
						alt='image'
						size={120}
						style={{
							position: 'absolute',
							left: '40px',
							bottom: 0,
							transform: 'translateY(50%)',
							border: '5px solid lightgrey'
						}}
					/>
				</div>
			</Col>

			<Col xs={24} style={{ marginTop: '70px' }} >
				<Typography.Title level={5} style={{ paddingLeft: '20px' }}>Narapon Jirattitigarnping</Typography.Title>
			</Col>

			<Col>
				<Typography.Title level={5} style={{ paddingLeft: '20px' }}>User ID #1234 Joined July 2021</Typography.Title>
			</Col>

			<Col xs={24}>
				<Row >
					<Col xs={24} >
						<Tabs
							defaultActiveKey="1"
							items={[
								{
									key: '1',
									label: 'All',
									children: <div style={{ margin: '30px' }}><ProductList products={products} /></div>,
								},
								{
									key: '2',
									label: 'Collected',
									children: <div style={{ margin: '30px' }}>
										<ProductList
											products={collected} />
									</div>,
								},
								{
									key: '3',
									label: 'Created',
									children: <div style={{ margin: '30px' }}>
										<ProductList
											products={created} />
									</div>,
								},
								{
									key: '4',
									label: 'Favorited',
									children: <div style={{ margin: '30px' }}>
										<ProductList
											products={favorited} />
									</div>,
								},
							]}
							tabBarExtraContent={{
								left: <Space style={{ marginRight: '24px' }}
								>
									<BarsOutlined />
									<Input
										allowClear
										suffix={<SearchOutlined />}
										style={{
											width: '100%',
											borderRadius: '16px',
											marginLeft: '10px'
										}} />
								</Space>,
								right: <Button
									type='text'
									icon={<AppstoreFilled style={{ fontSize: '25px' }} />}
								/>,
							}}
						/>
					</Col>

				</Row>
			</Col>
		</Row>
	)
};
