import { React, useEffect } from "react";
import Icon from "../../logo.svg";

import drainage from "../../images/Projects/WR128/drainage.jpg";
import drainage2 from "../../images/Projects/WR128/drainage2.jpg";
import autocad from "../../images/Projects/WR128/autocad.jpg";

import resume from "../../resume/RichieChanResume.pdf";

import { Link } from "react-router-dom";
import Footer from "../Footer";

function Nav() {
	return(
		<nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
			<div class="container flex flex-wrap items-center justify-between mx-auto">
				<Link to="/">
					<div class="flex items-center">
						<img src={Icon} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
						<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Richie Chan</span>
					</div>
				</Link>

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

function Portfolio() {
	return(
		<div className="pt-2 sm:pt-5 text-white">
			{/* Drainage Design Approval Section */}
			<h1 className="text-3xl sm:text-4xl">Drainage Design Approval</h1>
			<section className="sm:grid sm:grid-cols-3 sm:pt-5 pt-2 pb-2 sm:pb-3 relative sm:gap-5">
				<div className="sm:col-span-1 pb-1 sm:pb-3"><img src={drainage} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>
				<div className="sm:col-span-2 pb-1 sm:pb-3"><img src={drainage2} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">What?</h3>
					<ul className="list-disc">
						<li>
							The building drainage connection with the public manhole was <text className="font-semibold text-lime-500">
								blocked by existing utility services underground</text>
						</li>
						<li>
							Construction will <text className="font-semibold text-lime-500">affect traffic and a heritage building</text>
						</li>
						<li>
							<text className="font-semibold text-lime-500">The original design was rejected</text> by the government
						</li>
					</ul>
				</div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">How?</h3>
					<ul className="list-disc">
						<li>
							<text className="font-semibold text-lime-500">I studied the existing plans</text> of the public drainage system 
							and the underground <text className="font-semibold text-lime-500">utility survey report</text> from the contractor
						</li>
						<li>
							The contractor proposed <text className="font-semibold text-lime-500">pipe jacking</text> method to install pipes without affecting traffic
						</li>
						<li>
							I designed a <text className="font-semibold text-lime-500">new drainage connection</text> optimized for 
							the <text className="font-semibold text-lime-500">pipe jacking method</text>, without affecting existing 
							underground services and <text className="font-semibold text-lime-500">complied with regulatory standard</text>
						</li>
					</ul>
				</div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">Results</h3>
					<ul className="list-disc">
						<li>
							After few rounds of submission and discussion with government departments, <text className="font-semibold text-lime-500">
								design was approved in 2 months</text> using new installation method and design
						</li>
					</ul>
				</div>
			</section>

			<hr/>

			{/* Review Plumbing Design Section */}
			<h1 className="text-3xl sm:text-4xl pt-2">Review Plumbing Design</h1>
			<section className="sm:grid sm:grid-cols-3 sm:pt-5 pt-2 pb-2 sm:pb-3 relative sm:gap-5">
				<div className="sm:col-span-3 pb-1 sm:pb-3"><img src={autocad} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">What?</h3>
					<ul className="list-disc">
						<li>
							To ensure the plumbing and drainage design <text className="font-semibold text-lime-500">complied with regulations 
							and best practices</text>
						</li>
					</ul>
				</div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">How?</h3>
					<ul className="list-disc">
						<li>
							Consistently reviewed the <text className="font-semibold text-lime-500">as-built drawings</text> submitted by 
							the contractor, and participate in <text className="font-semibold text-lime-500">site visits</text>
						</li>
					</ul>
				</div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">Results</h3>
					<ul className="list-disc">
						<li>
							Both plumbing and drainage as-built drawings were <text className="font-semibold text-lime-500">approved by the 
							government</text>
						</li>
					</ul>
				</div>
			</section>

		</div>
	);
};

const WR128 = () => {
	useEffect(() => window.scrollTo(0, 0), []);
	return(
		<div>
			<Nav/>
			<Link to="/mechanical_projects" >
				<a class="mt-20 sm:mt-24 inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
					<svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
					Previous
				</a>
			</Link>
			<Portfolio/>
			<Footer/>
		</div>
	);
};

export default WR128;