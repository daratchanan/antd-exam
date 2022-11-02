import React from 'react'
import CarouselModern from '../components/CarouselModern'


const images = [
	{
		key: 1,
		img: 'https://cdn.pixabay.com/photo/2022/09/14/04/53/deer-7453413__340.jpg'
	},
	{
		key: 2,
		img: 'https://cdn.pixabay.com/photo/2022/09/26/23/27/horse-7481726__340.jpg'
	},
	{
		key: 3,
		img: 'https://cdn.pixabay.com/photo/2022/09/28/05/53/squirrel-7484292__340.jpg'
	},
	{
		key: 4,
		img: 'https://cdn.pixabay.com/photo/2022/08/09/13/38/fish-7375042__340.jpg'
	},
	{
		key: 5,
		img: 'https://cdn.pixabay.com/photo/2022/10/08/17/19/parrot-7507450__340.jpg'
	},
	{
		key: 6,
		img: 'https://cdn.pixabay.com/photo/2022/09/24/12/38/monkey-7476326__340.jpg'
	},
	{
		key: 7,
		img: 'https://cdn.pixabay.com/photo/2019/06/05/08/37/dog-4253238__340.jpg'
	},
	{
		key: 8,
		img: 'https://cdn.pixabay.com/photo/2022/08/22/10/28/tihany-7403355__340.jpg'
	},
];


export default function About() {
	return <CarouselModern images={images} />
};
