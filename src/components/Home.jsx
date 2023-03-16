import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
	return(
	<div>
		<h1 className='text-6xl text-white text-center pt-11'>Welcome to Richie Chan's Page</h1>
		<div className="grid grid-rows-1 grid-cols-2 pt-11 gap-11">
			<button className="block text-center text-5xl h-80 border-gray-800 border-solid border-4 rounded-3xl transition duration-300 text-gray-800 bg-slate-400 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white hover:scale-110">
				<Link to="/mechanical">Mechanical</Link>
			</button>
			<button className="block text-center text-5xl h-80 border-gray-800 border-solid border-4 rounded-3xl transition duration-300 text-gray-800 bg-slate-400 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white hover:scale-110">
				<Link to="/software">Software</Link>
			</button>
		</div>
		<br/>
		<Outlet/>
	</div>
	);
};

export default Home;