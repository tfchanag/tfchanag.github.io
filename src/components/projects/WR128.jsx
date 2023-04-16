import React from "react";
import Icon from "../../logo.svg";
import WR128Pic from "../../images/Projects/WR128/128.jpg";
import DR from "../../images/Projects/TKST/DR.jpg";
import PL from "../../images/Projects/TKST/PL.jpg";
import GREY from "../../images/Projects/TKST/GREY.jpg";
import SCHE from "../../images/Projects/TKST/SCHE.jpg";

import { Link } from "react-router-dom";

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

				<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
					<ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<p class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<Link to="/">Home</Link>
							</p>
						</li>
						<li>
							<p class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<Link to="/mechanical">About</Link>
							</p>
						</li>
						<li>
							<p class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
								<Link to="/mechanical_projects">Projects</Link>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

function TopPic() {
	return(
		<div>
			<img src={WR128Pic} className="pt-16 sm:p-20 w-full sm:h-96"></img>
		</div>
	);
};

function Description() {
	return(
		<div className="pt-5 sm:pt-10 text-white">
			<p className="text-xl font-bold sm:text-3xl sm:font-normal">My Role</p>
			<p className="pt-2 text-sm sm:text-base">
				As a <text className="font-semibold text-lime-500">plumbing and drainage (PL & DR) assistant engineer</text> , 
				I worked closely with the Project Engineer to design the PL & DR systems for residential building.
				<br/>
				Solved <text className="font-semibold text-lime-500">complex freshwater lead-in connection issues</text> by conducting site visits and coordinating closely with the government's Water 
				Supplies Department, leveraging strong problem-solving and communication skills.
				<br/>
				Overcame a significant challenge by designing the last manholes connecting to the public manholes, which required <text className="font-semibold text-lime-500">constructing a manhole 
				close to a heritage building and under one of the busiest streets</text>, ultimately securing government approval.
			</p>
			<p className="pt-2 text-xl font-bold sm:pt-5 sm:font-normal sm:text-3xl">Project Description</p>
			<p className="pt-2 text-sm sm:text-base">
				This residential building is a 16 story high building with <text className="font-semibold text-lime-500">2 floors of clubhouse, 
				parking lot and 16 floors of residential housing</text>. Seating on top of an existing electrical power transformer station.
				<br/>
				This project was seating near the <text className="font-semibold text-lime-500">busiest & old street of Hong Kong and near a heritage building</text>
				, the complex underground utilities affect the construction of PL & DR systems.
			</p>
			
		</div>
	);
};

function Pictures() {
	return(
		<div className="pt-10 pb-20">
			<section className="grid grid-cols-2 gap-7">
				<div className="col-span-1"><img src={DR} className="w-full rounded-xl"/></div>
				<div className="col-span-1"><img src={PL} className="w-full rounded-xl"/></div>
			</section>
			<section className="pt-3 grid grid-cols-2 gap-7">
				<div className="col-span-1"><img src={GREY} className="w-full rounded-xl"/></div>
				<div className="col-span-1"><img src={SCHE} className="w-full rounded-xl"/></div>
			</section>
			
		</div>
	);
}

const WR128 = () => {
	useEffect(()=> {
		document.title = "WR128";
	})
	return(
		<div>
			<Nav/>
			<TopPic/>
			<Description/>
		</div>
	);
};

export default WR128;