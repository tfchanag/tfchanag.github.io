import { React, useEffect } from "react";
import Icon from "../../logo.svg";
import BIM from "../../images/Projects/TKST/TKST-BIM.jpg";
import sche from "../../images/Projects/TKST/SCHE.jpg";
import PL from "../../images/Projects/TKST/PL.jpg";
import DR from "../../images/Projects/TKST/DR.jpg";
import MiC from "../../images/Projects/TKST/mic.jpg";
import joint from "../../images/Projects/TKST/joint.jpg";
import MiCDR from "../../images/Projects/TKST/mic-drainage.jpg";
import solarSchem from "../../images/Projects/TKST/solarhot2.jpg";
import solarLay from "../../images/Projects/TKST/solarhot1.jpg";
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
			{/* Revit BIM Section */}
			<h1 className="text-3xl sm:text-4xl">Revit BIM</h1>
			<section className="sm:grid sm:grid-cols-3 sm:pt-5 pt-2 pb-2 sm:pb-3 relative sm:gap-5">
				<div className="sm:col-span-3 pb-1 sm:pb-3"><img src={BIM} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">What?</h3>
					<ul className="list-disc">
						<li><text className="font-semibold text-lime-500">Revit BIM model</text> was part of the project submission requirement</li>
						<li><text className="font-semibold text-lime-500">LOD 300</text> at tender stage</li>
					</ul>
				</div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">How?</h3>
					<ul className="list-disc">
						<li>
							To deliver BIM model on time, the drafting was outsourced to drafting company, 
							but the <text className="font-semibold text-lime-500">clash coordination was done by myself</text> after 1st 
							draft was received
						</li>
					</ul>
				</div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">Results</h3>
					<ul className="list-disc">
						<li>
							After <text className="font-semibold text-lime-500">coordination using 3D BIM model, and AutoCAD</text>, the 
							MEP services in the corridor were well placed with <text className="font-semibold text-lime-500">headroom left</text>
						</li>
					</ul>
				</div>
			</section>
			
			<hr/>

			{/* Sustainable Section */}
			<h1 className="text-3xl sm:text-4xl pt-2">Sustainable Plumbing System</h1>
			<section className="sm:grid sm:grid-cols-3 sm:pt-5 pt-2 pb-2 sm:pb-3 relative sm:gap-5">
				<div className="sm:col-span-2 pb-1 sm:pb-3"><img src={solarSchem} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>
				<div className="sm:col-span-1 pb-1 sm:pb-3 hidden sm:block"><img src={solarLay} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>

				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">What?</h3>
					<ul className="list-disc">
						<li>
							The project requires sustainable plumbing systems 
							to <text className="font-semibold text-lime-500">save energy and water</text>
						</li>
					</ul>
				</div>
				
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">How?</h3>
					<ul className="list-disc">
						<li>
							Meetings with suppliers with experiences in the <text className="font-semibold text-lime-500">solar hot water 
							system, greywater and rainwater recycling system</text>
						</li>
						<li>
							Designed the systems by preparing <text className="font-semibold text-lime-500">design calculations and design 
							briefs</text>, explaining the treatment method / energy capture method and calculate the design requirements of each 
							system using cooresponding energy equation
						</li>
					</ul>
				</div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">Results</h3>
					<ul className="list-disc">
						<li>The solar hot water system saved <text className="font-semibold text-lime-500">2593kWh</text> annually</li>
						<li>The rainwater recycling system saved <text className="font-semibold text-lime-500">13% of yearly irrigation water</text></li>
						<li>The grey-water recycling system can process <text className="font-semibold text-lime-500">1350L per day</text></li>
					</ul>
				</div>
			</section>

			<hr/>

			{/* MiC Section */}
			<h1 className="text-3xl sm:text-4xl pt-2">MEP Design for MiC</h1>
			<section className="sm:grid sm:grid-cols-3 sm:pt-5 pt-2 pb-2 sm:pb-3 relative sm:gap-5">
				<div className="sm:col-span-1 pb-1 sm:pb-3"><img src={MiC} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>
				<div className="sm:col-span-1 pb-1 sm:pb-3 hidden sm:block"><img src={joint} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>
				<div className="sm:col-span-1 pb-1 sm:pb-3 hidden sm:block"><img src={MiCDR} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>

				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">What?</h3>
					<ul className="list-disc">
						<li>
							This project utilizes <text className="font-semibold text-lime-500">Modular Integrated Construction 
							(MiC)</text> method to construct
						</li>
						<li>
							To design <text className="font-semibold text-lime-500">Plumbing and Drainage systems</text> which optimized for 
							MiC method
						</li>
					</ul>
				</div>
				
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">How?</h3>
					<ul className="list-disc">
						<li>Meetings with contractors and suppliers that had MiC experiences</li>
						<li>
							Adopted a plumbing connection method that could <text className="font-semibold text-lime-500">compensate the ±50mm 
							tolerance </text>between modules
						</li>
						<li>
							Designed drainage system <text className="font-semibold text-lime-500">without using sunken slab</text>
						</li>
					</ul>
				</div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">Results</h3>
					<ul className="list-disc">
						<li>Using <text className="font-semibold text-lime-500">flexible connectors</text> when connecting pipes between modules</li>
						<li>
							Purposely design drainage pipes <text className="font-semibold text-lime-500">running on the outer wall</text>, 
							without going to sunken level
						</li>
					</ul>
				</div>
			</section>

			<hr/>

			{/* Plumbing Design Section */}
			<h1 className="text-3xl sm:text-4xl pt-2">Plumbing System</h1>
			<section className="sm:grid sm:grid-cols-3 sm:pt-5 pt-2 pb-2 sm:pb-3 relative sm:gap-5">
				<div className="sm:col-span-1 pb-1 sm:pb-3"><img src={sche} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>
				<div className="sm:col-span-1 pb-1 sm:pb-3 hidden sm:block"><img src={PL} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>
				<div className="sm:col-span-1 pb-1 sm:pb-3 hidden sm:block"><img src={DR} className="w-full mx-auto sm:h-72 sm:w-auto rounded-3xl"/></div>

				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">What?</h3>
					<ul className="list-disc">
						<li>Design <text className="font-semibold text-lime-500">Plumbing</text> schematics, layout and details drawings</li>
					</ul>
				</div>
				
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">How?</h3>
					<ul className="list-disc">
						<li>Design <text className="font-semibold text-lime-500">calculation and schematic</text> were first completed</li>
						<li>Layout drawings <text className="font-semibold text-lime-500">drafted using AutoCAD </text></li>
					</ul>
				</div>
				<div className="sm:col-span-1">
					<h3 className="text-lg font-semibold">Results</h3>
					<ul className="list-disc">
						<li>Finished the complete set of tender drawings in <text className="font-semibold text-lime-500">1 month</text></li>
					</ul>
				</div>
			</section>

			
		</div>
	);
};


const TKST = () => {
	useEffect(() => window.scrollTo(0, 0), []);
	return(
		<div>
			<Nav/>
			<Link to="/mechanical_projects">
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

export default TKST;