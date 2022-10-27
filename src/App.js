import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.less';
import Home from './views/Home';
import Explore from './views/Explore';
import About from './views/About';
import MainLayout from './Layout/MainLayout';
import Profile from './views/Profile';
import Account from './views/Account';
import Security from './views/Security';
import Bookbank from './views/Bookbank';


function App() {
	return (

		<Routes>
			<Route path='/' element={<MainLayout />} >
				<Route path='' element={<Home />} />
				<Route path='explore' element={<Explore />} />
				<Route path='about' element={<About />} />
				<Route path='profile' element={<Profile />} >
					<Route path='account' element={<Account />} />
					<Route path='security' element={<Security />} />
					<Route path='bookbank' element={<Bookbank />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
