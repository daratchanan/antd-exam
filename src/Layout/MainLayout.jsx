import React from 'react';
import {  Button, Col, Input, Layout, Menu, Row, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';

const { Header, Content } = Layout;

const menuItems = [
	{
		key: 'home',
		label: <Button
			type='text'
			href='/'
		>
			Home
		</Button>
	},
	{
		key: 'explore',
		label: <Button
			type='text'
			href='/explore'
		>
			Explore
		</Button>
	},
	{
		key: 'about',
		label: <Button
			type='text'
			href='/about'
		>
			About
		</Button>
	},
];


export default function MainLayout() {
	return (
		<Layout>
			<Header>
				<Row >
					<Col>
						<Button
							type='primary'
							style={{ fontWeight: 'bold' }}
						>
							R
						</Button>
					</Col>
					<Col>
						<Typography
							style={{
								marginLeft: '20px',
								fontWeight: 'bolder',
								fontSize: '18px'
							}}
						> Rapy
						</Typography>
					</Col>
					<Col xs={8}>
						<Menu
							mode="horizontal"
							items={menuItems}
							style={{ marginLeft: '40px' }}
						/>
					</Col>
					<Col flex={1} />
					<Col>
						<Input
							placeholder="Search now "
							allowClear
							prefix={<SearchOutlined />}
							style={{
								width: 200,
								borderRadius: '16px',
							}}
						/>
					</Col>
					<Col>
						<Button
							type='primary'
							shape='round'
							style={{ marginLeft: '10px' }}
						>
							Create
						</Button>
					</Col>
					<Col>
						<Button
							shape='round'
							style={{ marginLeft: '10px' }}
						>
							Connect wallet
						</Button>
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
