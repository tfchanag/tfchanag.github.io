import React from "react";
import { Outlet, Link } from "react-router-dom";
import Icon from "../logo.svg";

function Nav() {
	return(
		<nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
			<div class="container flex flex-wrap items-center justify-between mx-auto">
				<div class="flex items-center">
					<img src={Icon} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
					<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Richie Chan</span>
				</div>
			</div>
		</nav>
	);
}

const Home = () => {
	return(
	<div>
		<Nav/>
		<h1 className='text-6xl text-white text-center pt-24'>Welcome to Richie Chan's Page</h1>
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