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

				<div class="flex md:order-2">
					<a href='./resume/richieChanResume.pdf' download>
						<button id='btnDowload' value="download" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Download Resume
						</button>
					</a>
					
					{/* <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
					</button> */}
				</div>
			</div>
		</nav>
	);
}

const Home = () => {
	return(
	<div>
		<Nav/>
		<h1 className='text-xl text-white text-center pt-24 sm:text-6xl'>Welcome to Richie Chan's Page</h1>
		<div className="grid grid-rows-1 grid-cols-2 pt-11 gap-11">
			<button className="block text-center text-base sm:text-5xl h-20 sm:h-80 border-gray-800 border-solid border-4 rounded-3xl transition duration-300 text-gray-800 bg-slate-400 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white hover:scale-110">
				<Link to="/mechanical">Mechanical</Link>
			</button>
			{/* <button className="block text-center text-5xl h-80 border-gray-800 border-solid border-4 rounded-3xl transition duration-300 text-gray-800 bg-slate-400 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white hover:scale-110">
				<Link to="/software">Software</Link>
			</button> */}
		</div>
		<br/>
		<Outlet/>
	</div>
	);
};

export default Home;