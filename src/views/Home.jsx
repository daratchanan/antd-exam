import React from 'react'
import {
	Col,
	Row,
	Typography
} from 'antd';
import {
	CaretLeftOutlined,
	CaretRightOutlined
} from '@ant-design/icons';
import ImageSlider from '../components/ImageSlider';


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
];

const collection = [
	{
		key: 1,
		name: 'Pic 1',
		img: 'https://i.seadn.io/gae/iRem7rZFWHgoH9Di3s280b8z_HXziEGaTQelfUC6wrncBS8LlRswK9OJ3sVhkK01xrT9Tl-jPMtWqL_U-mgV5HpB96xlyz7ZsXWAnOk?auto=format&w=384'
	},
	{
		key: 2,
		name: 'Pic 2',
		img: 'https://i.seadn.io/gae/IQv-7FH1zfCjXbEJ3yt5ZNzD9k8nrwHSVR3_NcxO9MT8A1oisIYCQksKpLDzubJMgBruWu2olernmYcg6DuB6AJz7EHbHCMDj5U3l6E?auto=format&w=384'
	},
	{
		key: 3,
		name: 'Pic 3',
		img: 'https://i.seadn.io/gae/R_AxZMtVv96fAR5PmZrEn4ikrlySwgcqsvKioVmTxAR2V9qFfTs6vTpM__RVpZf8GetFdOcVqUL35m2NRq3628tecuk80n1PsCx2Zxo?auto=format&w=384'
	}
];


export default function Home() {
	return (
		<>
			<Row gutter={[24, 24]}>
				<Col xs={24}>
					<div style={{ background: '#f0f2f5',padding:'0px 32px' }}>
						<ImageSlider products={products} />
					</div>
				</Col>

				<Col xs={24}>
					<Row justify='space-between'>
						<Col>
							<Typography style={{ fontSize: '16px', fontWeight: 'bold' }}>Recommended Collections</Typography>
						</Col>
						<Col>
							<CaretLeftOutlined />
							<CaretRightOutlined />
							<Typography.Text style={{ fontSize: '16px', fontWeight: 'bold' }}>More</Typography.Text>
						</Col>
					</Row>
				</Col>
				<Col xs={24}>
					<Row gutter={[24, 0]}>
						{collection.map(coll =>
							<Col xs={24} sm={8} key={coll.key} >
								<img src={coll.img} alt={coll.name} width={'100%'} />
							</Col>
						)}
					</Row>
				</Col>
			</Row>
		</>
	)
};
