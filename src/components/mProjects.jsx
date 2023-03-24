import React from "react";
import Icon from "../logo.svg";
import TKST from "../images/Projects/TKSt.jpg";
import Galaxy from "../images/Projects/Galaxy.jpg";
import W128 from "../images/Projects/128.jpg";
import KokoHills from "../images/Projects/Kokohills.jpg";
import FYP2 from "../images/Projects/FYP-2.jpg";
import BeerPouring from "../images/Projects/Beerpouring.jpg";

import { Outlet, Link } from "react-router-dom";

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
					
					<button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
					</button>
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

function Projects() {
	return(
		<div className="pt-28 text-white">
			<section className="grid grid-cols-5">
				<div className="col-span-2"><Link to="/"><img src={TKST} className="hover:scale-110 transition duration-300 w-72 rounded-3xl"/></Link></div>
				<div className="pl-8 text-3xl col-span-3">
					Tonkin Street Residential Development
					<p className="text-lg pt-2">
						Designed and calculated mechancial system for a single tower residential with plaza and parking lot
					</p>
				</div>
			</section>

			<section className="grid grid-cols-5 pt-3">
				<div className="col-span-2"><Link to="/"><img src={Galaxy} className="hover:scale-110 transition duration-300 w-72 rounded-3xl"/></Link></div>
				<div className="pl-8 text-3xl col-span-3">
					Galaxy Hotel Phase 3
					<p className="text-lg pt-2">
						Designed plumbing & draiange system for casino and hotel portion
					</p>
				</div>
			</section>

			<section className="grid grid-cols-5 pt-3">
				<div className="col-span-2"><Link to="/"><img src={W128} className="hover:scale-110 transition duration-300 w-72 rounded-3xl"/></Link></div>
				<div className="pl-8 text-3xl col-span-3">
					Waterloo Road 128 Residential Development
					<p className="text-lg pt-2">
						Designed and calculated mechancial system for a single tower residential with parking lot
					</p>
				</div>
			</section>

			<section className="grid grid-cols-5 pt-3">
				<div className="col-span-2"><Link to="/"><img src={KokoHills} className="hover:scale-110 transition duration-300 w-72 rounded-3xl"/></Link></div>
				<div className="pl-8 text-3xl col-span-3">
					Koko Hills Residential Development
					<p className="text-lg pt-2">
						On-site engineer inspection and testing of mechanical system, on-site design coordination
					</p>
				</div>
			</section>

			<section className="grid grid-cols-5 pt-3">
				<div className="col-span-2"><Link to="/"><img src={FYP2} className="hover:scale-110 transition duration-300 w-96 rounded-3xl"/></Link></div>
				<div className="pl-8 text-3xl col-span-3">
					Design and Development of an Ultralight Insect Like Flying Robot
					<p className="text-lg pt-2">
						Designed a flapping wing robot that minmic insect flying pattern
					</p>
				</div>
			</section>

			<section className="grid grid-cols-5 pt-3">
				<div className="col-span-2"><Link to="/"><img src={BeerPouring} className="hover:scale-110 transition duration-300 w-72 rounded-3xl"/></Link></div>
				<div className="pl-8 text-3xl col-span-3">
					Beer Pouring Machine
					<p className="text-lg pt-2">
						Designed an automatic beer bottle pouring meachatronic
					</p>
				</div>
			</section>
		</div>
	);
};

const mProjects = () => {
	return(
		<div className='container mx-auto px-20'>
			<Nav/>
			<Projects/>
		</div>
	);
};

export default mProjects;