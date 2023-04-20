import { React, useEffect } from "react";
import Icon from "../logo.svg";
import TKST from "../images/Projects/TKST/TKSt.jpg";
import Galaxy from "../images/Projects/Galaxy/Galaxy.jpg";
import W128 from "../images/Projects/WR128/128.jpg";
import KokoHills from "../images/Projects/KokoHills/Kokohills.jpg";
import FYP2 from "../images/Projects/FYP/FYP-2.jpg";
import resume from "../resume/RichieChanResume.pdf";

import { Link } from "react-router-dom";
import Footer from "./Footer";

function Nav() {
	return(
		<nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
			<div class="container flex flex-wrap items-center justify-between mx-auto">
				<div class="flex items-center">
					<img src={Icon} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
					<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Richie Chan</span>
				</div>

				<div class="flex md:order-2">
					<a href={resume} download>
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
					<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<a class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<Link to="/">Home</Link>
							</a>
						</li>
						<li>
							<a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<Link to="/about">About</Link>
							</a>
						</li>
						<li>
							<a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<Link to="/mechanical">Experience</Link>
							</a>
						</li>
						<li>
							<a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
								<Link to="/mechanical_projects">Projects</Link>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

function Projects() {
	return(
		<div className="pb-20 text-white">
			<Link to="/">
				<a class="mt-20 sm:mt-24 inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
					<svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
					Home
				</a>
			</Link>
			<p className="pt-2 sm:pt-5 text-2xl font-bold text-white sm:text-6xl pb-5">Projects I Worked On</p>
			<Link to="/tkst">
				<section className="sm:grid sm:grid-cols-5 sm:hover:scale-110 transition duration-300 relative">
					<div className="sm:col-span-2 "><img src={TKST} className="w-72 mx-auto rounded-3xl"/></div>
					<div className="mt-2 sm:mt-0 p-2 pt-0 text-lg font-semibold sm:pl-5 sm:text-3xl sm:col-span-3 bg-green-800 rounded-lg">
						<p className="pt-0 sm:pt-2">Tonkin Street Residential Development</p>
						<p className="text-base font-normal sm:text-lg pt-2">
							Designed mechanical system and as a project coordinator of this high-rise residential building, coordinated with in-house 
							engineers, clients, architect and responsible for government submissions
						</p>
						<p className="italic text-base absolute right-1 bottom-0 text-slate-300">Details →</p>
					</div>
				</section>
			</Link>
			<Link to="/galaxy">
				<section className="sm:grid sm:grid-cols-5 pt-5 sm:hover:scale-110 transition duration-300 relative">
					<div className="sm:col-span-2"><img src={Galaxy} className="w-72 mx-auto rounded-3xl"/></div>
					<div className="mt-2 sm:mt-0 p-2 pt-0 text-lg font-semibold sm:pl-5 sm:text-3xl sm:col-span-3 bg-green-800 rounded-lg">
						<p className="pt-0 sm:pt-2">Galaxy Hotel Phase 3</p>
						<p className="text-base font-normal sm:text-lg pt-2">
							Designed plumbing & drainage system for this entertainment complex, coordinated with onsite engineer, clients and 
							civil enginers
						</p>
						<p className="italic text-base absolute right-1 bottom-0 text-slate-300">Details →</p>
					</div>
				</section>
			</Link>
			<Link to="/wr128">
				<section className="sm:grid sm:grid-cols-5 pt-5 sm:hover:scale-110 transition duration-300 relative">
					<div className="sm:col-span-2"><img src={W128} className="w-72 mx-auto rounded-3xl"/></div>
					<div className="mt-2 sm:mt-0 p-2 pt-0 text-lg font-semibold sm:pl-5 sm:text-3xl sm:col-span-3 bg-green-800 rounded-lg">
						<p className="pt-0 sm:pt-2">Waterloo Road 128 Residential Development</p>
						<p className="text-base font-normal sm:text-lg pt-2">
							Designed and calculated mechancial system for a single tower residential high-rise building, tackled government related utilities 
							construction and submissions.
						</p>
						<p className="italic text-base absolute right-1 bottom-0 text-slate-300">Details →</p>
					</div>
				</section>
			</Link>
			<Link to="/kokohills">
				<section className="sm:grid sm:grid-cols-5 pt-5 sm:hover:scale-110 transition duration-300 relative">
					<div className="sm:col-span-2"><img src={KokoHills} className="w-72 mx-auto rounded-3xl"/></div>
					<div className="mt-2 sm:mt-0 p-2 pt-0 text-lg font-semibold sm:pl-5 sm:text-3xl sm:col-span-3 bg-green-800 rounded-lg">
						<p className="pt-0 sm:pt-2">Koko Hills Residential Development</p>
						<p className="text-base font-normal sm:text-lg pt-2">
							On-site engineer inspection and testing of mechanical system, on-site design coordination
						</p>
						<p className="italic text-base absolute right-1 bottom-0 text-slate-300">Details →</p>
					</div>
				</section>
			</Link>
			<Link to="/fyp">
				<section className="sm:grid sm:grid-cols-5 pt-5 sm:hover:scale-110 transition duration-300 relative">
					<div className="sm:col-span-2"><img src={FYP2} className="w-72 mx-auto rounded-3xl"/></div>
					<div className="mt-2 sm:mt-0 p-2 pt-0 text-lg font-semibold sm:pl-5 sm:text-3xl sm:col-span-3 bg-green-800 rounded-lg">
						<p className="pt-0 sm:pt-2">Design and Development of an Ultralight Insect Like Flying Robot</p>
						<p className="text-base font-normal sm:text-lg pt-2">
							Designed a flapping wing robot that minmic insect flying pattern
						</p>
						<p className="italic text-base absolute right-1 bottom-0 text-slate-300">Details →</p>
					</div>
				</section>
			</Link>
		</div>
	);
};

const MProjects = () => {
	useEffect(() => window.scrollTo(0, 0), []);
	return(
		<div>
			<Nav/>
			<Projects/>
			<Footer/>
		</div>
	);
};

export default MProjects;