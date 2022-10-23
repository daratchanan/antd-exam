import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Explore from './views/Explore';
import About from './views/About';
import MainLayout from './Layout/MainLayout';
import './App.less';


function App() {
	return (

		<Routes>
			<Route path='/' element={<MainLayout />} >
				<Route path='/' element={<Home />} />
				<Route path='/explore' element={<Explore />} />
				<Route path='/about' element={<About />} />
			</Route>
		</Routes>
	);
}

export default App;
