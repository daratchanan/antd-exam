import React from 'react';
import { Button, Col, Input, Layout, Menu, Row, Typography } from 'antd';
import {
	SearchOutlined,
	FormOutlined,
	HeartOutlined,
	ShoppingCartOutlined,
	UserOutlined,
	CaretDownOutlined
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import DrawerMenu from '../components/DrawerMenu';

const { Header, Content } = Layout;

const menuItems = [
	{
		key: 'create',
		label: <Button
			type='text'
			href='/create'
			icon={<FormOutlined />}
		>
			Create
		</Button>
	},
	{
		key: 'myFavorites',
		label: <Button
			type='text'
			href='/myFavorites'
			icon={<HeartOutlined />}
		>
			My favorites
		</Button>
	},
	{
		key: 'addToCart',
		label: <Button
			type='text'
			href='/addToCart'
			icon={<ShoppingCartOutlined />}
		>
			Add to cart
		</Button>
	},
	{
		key: 'account',
		label: <Button
			type='text'
			icon={<UserOutlined />}
		>
			Account <CaretDownOutlined />
		</Button>,
		children: [
			{
				key: 'login',
				label: 'Log in'
			},
			{
				key: 'signup',
				label: 'Sign up'
			}
		]
	},
];


export default function MainLayout() {
	return (
		<Layout>
			<Header>
				<Row >
					<Col>
						<DrawerMenu />
					</Col>

					<Col>
						<Typography
							style={{
								marginLeft: '5px',
								fontWeight: 'bolder',
								fontSize: '18px'
							}}
						> NOWHERE
						</Typography>
					</Col>

					<Col>
						<Input
							allowClear
							suffix={<SearchOutlined />}
							style={{
								width: 300,
								borderRadius: '16px',
								marginLeft: '30px'
							}}
						/>
					</Col>

					<Col flex={1} />

					<Col xs={12} push={2}>
						<Menu
							mode="horizontal"
							items={menuItems}
						// style={{ marginLeft: '40px' }}
						/>
					</Col>
				</Row>
			</Header>

			<Content
				style={{ width: '80%', margin: '0px auto' }}
			>
				<Outlet />

			</Content>
		</Layout>
	)
};
