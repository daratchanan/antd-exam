import React from 'react'
import {
	Avatar,
	Col,
	Row
} from 'antd'

export default function Explore() {
	return (
		<Row>
			<Col xs={24}>
				<div style={{
					position: 'relative',
					backgroundImage: "url('https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2742&q=80')",
					height: '200px',
					width: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
					{/* <img src='https://images.unsplash.com/photo-1615003162333-d3ff3ce1f0f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2lkZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
						alt='image'
						width='100%'
					/> */}
					<Avatar src='https://media.istockphoto.com/photos/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised-picture-id1361394182?b=1&k=20&m=1361394182&s=170667a&w=0&h=cW_NDV-D-jrWBVcEPclIU9vRipFQZQC0armvGMN7w-c='
						alt='image'
						size={120}
						style={{
							position: 'absolute',
							left: '50px',
							bottom:0,
							transform: 'translateY(50%)',
							border: '5px solid lightgrey'
						}}
					/>
				</div>



			</Col>
		</Row>
	)
};
