import React from "react";
import { Outlet, Link } from "react-router-dom";
import Icon from "../logo.svg";
import resume from "../resume/RichieChanResume.pdf";
import HKUST from "../images/About/HKUST.jpg";
import mechanical from "../images/About/mechanical.jpeg";
import mecha from "../images/About/mecha.jpg";

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
					<ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<p class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<Link to="/">Home</Link>
							</p>
						</li>
						<li>
							<p href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
								<Link to="/about">About</Link>
							</p>
						</li>
						<li>
							<p href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<Link to="/mechanical">Experience</Link>
							</p>
						</li>
						<li>
							<p href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<Link to="/mechanical_projects">Projects</Link>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

const About = () => {
	return(
		<div>
			<Nav/>
			<div className="pt-20">
				<p className="text-2xl font-bold text-white sm:text-6xl pb-5">This is my journey</p>
				<ol class="relative border-l border-gray-200 dark:border-gray-700">                  
					<li class="mb-10 ml-4">
						<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<time class="mb-1 text-sm font-normal leading-none text-gray-500">September 2015</time>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Study at HKUST</h3>
						<p class="mb-4 text-base font-normal text-slate-300 dark:text-slate-300">
							Through endeavour and will, I joined one of the most prestige university in Hong Kong - <a href="https://hkust.edu.hk/" target="_blank" className="italic text-blue-500 font-semibold underline">The Hong Kong University of Science and Technology</a> 
							&nbsp;and enrolled in Bachleor in Engineering Program.
						</p>
						<img src={HKUST} className="sm:w-1/2 w-full"/>
					</li>
					<li class="mb-10 ml-4">
						<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<time class="mb-1 text-sm font-normal leading-none text-gray-500">September 2016</time>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mechanical Engineering</h3>
						<p class="mb-4 text-base font-normal text-slate-300 dark:text-slate-300">
							I chose major in mechanical engineering, not only for the love of mecha, also I wanted my future career to be helpful to the society, improving wellbeing. Renewable energy, machinery, product design and Air-con are all mechancial, so at the end I chose mechanical engineering.
						</p>
						<div className="flex gap-1 sm:gap-2">
							<img src={mechanical} className="w-1/2"/>
							<img src={mecha} className="w-1/2"/>
						</div>
					</li>
					<li class="mb-10 ml-4">
						<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<time class="mb-1 text-sm font-normal leading-none text-gray-500">September 2016</time>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mechanical Engineering</h3>
						<p class="mb-4 text-base font-normal text-slate-300 dark:text-slate-300">
							I chose major in mechanical engineering, not only for the love of mecha, also I wanted my future career to be helpful to the society, improving wellbeing. Renewable energy, machinery, product design and Air-con are all mechancial, so at the end I chose mechanical engineering.
						</p>
						<div className="flex gap-1 sm:gap-2">
							<img src={mechanical} className="w-1/2"/>
							<img src={mecha} className="w-1/2"/>
						</div>
					</li>
				</ol>

			</div>
		</div>
	);
};

export default About;