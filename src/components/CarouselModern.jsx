import React, { useState } from 'react';
import {
	Button,
	Col,
	Row,
	Typography
} from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import Slider from 'react-slick';


const SampleNextArrow = ({ onClick }) => {
	return (
		<div
			style={{
				width: '30px',
				top: '50%',
				right: '20px',
				boxShadow: '0 0 5px 3px #ccc',
				display: 'flex',
				position: 'absolute',
				zIndex: '10',
				transform: 'translate(0%, -50%)',
			}}
		>
			<Button
				type='text'
				icon={<RightOutlined />}
				onClick={onClick}
			/>
		</div>
	);
};

function SamplePrevArrow({ onClick }) {
	return (
		<div
			style={{
				width: '30px',
				top: '50%',
				left: '20px',
				boxShadow: '0 0 5px 3px #ccc',
				display: 'flex',
				position: 'absolute',
				zIndex: '10',
				transform: 'translate(0%, -50%)',
			}}
		>
			<Button
				type='text'
				icon={<LeftOutlined />}
				onClick={onClick}
			/>
		</div>
	);
};

export default function CarouselModern({ images }) {
	const [slideIndex, setSlideIndex] = useState(0);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		beforeChange: (current, next) => {
			// console.log('current=>', current);
			// console.log('next=>', next);
			setSlideIndex(next);
		},
		centerMode: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};


	return (
		<Row>
			<Col xs={24} >
				<Typography.Title style={{ textAlign: 'center' }}>Modern React Carousel</Typography.Title>
			</Col>

			<Col xs={24} >
				<div className='slider'>
					<Slider {...settings}>
						{images.map((item, idx) => {
							// console.log('idx=>', idx)
							return (
								< div
									className={idx === slideIndex ? 'slide slide-active' : 'slide'}
									key={idx}
								>
									<img
										src={item.img}
										alt=''
									/>
								</div>
							)
						})}
					</Slider>
				</div>
			</Col >

		</Row >
	)
};
