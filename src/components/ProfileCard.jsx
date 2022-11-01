import { Typography } from 'antd';
import React from 'react';

export default function ProfileCard({ card }) {
	return (
		<div >
			<img src={card.img}
				alt={card.name}
				width='100%'
				style={{ borderRadius: '10px' }}
			/>
			<Typography.Title level={5}>{card.name}</Typography.Title>
			<Typography.Text level={5}>{card.categories}</Typography.Text>
		</div>
	)
};
