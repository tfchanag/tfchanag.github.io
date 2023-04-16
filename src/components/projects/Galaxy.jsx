import React from "react";
import Icon from "../../logo.svg";
import GalaxyPic from "../../images/Projects/Galaxy/Galaxy.jpg";
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
			<img src={GalaxyPic} className="pt-16 sm:p-20 w-full sm:h-96"></img>
		</div>
	);
};

function Description() {
	return(
		<div className="pt-5 sm:pt-10 text-white">
			<p className="text-xl font-bold sm:text-3xl sm:font-normal">My Role</p>
			<p className="pt-2 text-sm sm:text-base">
				As a <text className="font-semibold text-lime-500">plumbing and drainage (PL & DR) assistant engineer</text>,
				I worked closely with the Project Engineer to design the PL & DR systems for building complexes, 
				including hotels, casinos, shopping plazas, and open landscape areas. 
				I utilized <text className="font-semibold text-lime-500">2D AutoCAD</text> to create detailed designs and plans for the PL & DR systems, 
				ensuring compliance with relevant codes and standards. I worked under the guidance of the Project Engineer, 
				gaining valuable experience in designing complex PL & DR systems for large-scale projects.
				<br/>
				<text className="font-semibold text-lime-500">Coordinated with a civil drainage engineer</text> when designing drainage system in open landscape area 
				and ensure that all work complied with relevant codes of practice for both parties.
				
			</p>
			<p className="pt-2 text-xl font-bold sm:pt-5 sm:font-normal sm:text-3xl">Project Description</p>
			<p className="pt-2 text-sm sm:text-base">
				This entertainment hotel complex composted of <text className="font-semibold text-lime-500">hotel towers, a casino plaza, shopping plaza with F&B, parking lot and a open landscape area</text>.
				One of the largest entertainment project in Macau.
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

const Galaxy = () => {
	useEffect(()=> {
		document.title = "Galaxy";
	})
	return(
		<div>
			<Nav/>
			<TopPic/>
			<Description/>
		</div>
	);
};

export default Galaxy;