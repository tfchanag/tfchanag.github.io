import React from "react";
import Icon from "../../logo.svg";
import TKSTPic from "../../images/Projects/TKST/TKSt-BIM.jpg";
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
			<img src={TKSTPic} className="pt-16 sm:p-20 w-full sm:h-96"></img>
		</div>
	);
};

function Description() {
	return(
		<div className="pt-5 sm:pt-10 text-white">
			<p className="text-xl font-bold sm:text-3xl sm:font-normal">My Role</p>
			<p className="pt-2 text-sm sm:text-base">
				As a <text className="font-semibold text-lime-500">project coordinator and plumbing and drainage (PL & DR) assistant engineer</text> , I worked closely with the Project Manager to coordinate the MEP design for the entire building.
				This included designing systems such as <text className="font-semibold text-lime-500">solar hot water, greywater, and rainwater recycling.</text>
				<br/>
				During the tender phase of the project, I actively participated in coordinating with the structural engineer, architect, and in-house MEP engineer to ensure seamless integration of MEP systems with other parties.
				<br/>
				I successfully coordinated and built a <text className="font-semibold text-lime-500">Revit model</text> using an external drafting company.
				<br/>
				Under the guidance of the Project Manager, I gained valuable experience in project coordination, PL & DR design, and tendering processes, while maintaining effective communication and collaboration with various stakeholders throughout the project.
			</p>
			<p className="pt-2 text-xl font-bold sm:pt-5 sm:font-normal sm:text-3xl">Project Description</p>
			<p className="pt-2 text-sm sm:text-base">
				This residential building is a 28 story high building with <text className="font-semibold text-lime-500">3 floors of shopping mall (w/ F&B), a underground parking lot, a floor of sky garden, a floor of clubhouse and 25 floors of residential housing</text>.
				The residential portion of the building was designed to construct using&nbsp;
				<a href="https://www.snclavalin.com/en/beyond-engineering/key-to-success-for-modular-integrated-construction#:~:text=Modular%20integrated%20construction%20uses%20prefabricated,installed%20in%20their%20final%20positions." className="italic text-blue-500 font-semibold">
					Modular Integrated Construction method (MiC)
				</a>.
				MiC method bring challenges to MEP department, the structure of each apartment will be partly steel, partly concrete. 
				MEP service usually running inside concrete will need a different approach when designing.
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

const TKST = () => {
	return(
		<div>
			<Nav/>
			<TopPic/>
			<Description/>
		</div>
	);
};

export default TKST;