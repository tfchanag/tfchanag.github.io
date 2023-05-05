import { React, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Icon from "../logo.svg";
import resume from "../resume/RichieChanResume.pdf";
import Footer from "./Footer";

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
							<a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
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
							<a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								<Link to="/mechanical_projects">Projects</Link>
							</a>
						</li>
					</ul>
				</div>
			</div>
			
		</nav>
	);
};

function ShortDesc() {
	return(
		<div>
			<h1 className='text-2xl font-bold text-white pt-20 sm:pt-24 sm:text-6xl'>Who is Richie Chan?</h1>
			<div className="text-slate-300 pt-5 gap-11 sm:text-lg">
				<div>
					<ul className="list-disc">
						<li className="pt-2">
							🎓 '19: Graduated from <a href="https://hkust.edu.hk/" target="_blank" className="italic text-blue-500 font-semibold underline">The Hong Kong University of Science and Technology</a> 
							&nbsp;with <text className="font-semibold text-lime-500">Bachelor in Mech.</text>
						</li>
						<li className="pt-2">
							🏗️ '19: Worked at <a href="https://www.hiphing.com.hk/en/" target="_blank" className="italic text-blue-500 font-semibold underline">Hip Hing</a> 
							&nbsp;as <text className="font-semibold text-lime-500">Assistant Building Service Engineer</text>, built Koko Hills
						</li>
						<li className="pt-2">
							🏢 '20: Worked at <a href="https://www.aurecongroup.com/" target="_blank" className="italic text-blue-500 font-semibold underline">Aurecon</a> 
							&nbsp;as <text className="font-semibold text-lime-500">Assistant Mechanical Engineer</text>, designed MEP systems for 3+ projects
						</li>
						<li className="pt-2">
							✍🏻 '21: Earned <text className="font-semibold text-lime-500">Autodesk Certificate in AutoCAD and Revit MEP 
							BIM</text> modelling
						</li>
						<li className="pt-2">
							🌎 '21: Moved to <text className="font-semibold text-lime-500">Toronto</text>, seeking a future here
						</li>
						<li className="pt-2 font-semibold text-xl sm:text-2xl">
							👷🏻‍♂️ '23: Strive for an opportunity to start my journey becoming <text className="text-lime-500">PEng.</text>
						</li>
					</ul>
				</div>
				<br/>
				{/* <div className="grid sm:grid-cols-4 grid-cols-2">
					<p className="pt-0 col-span-1">Know more about me</p>
					<div className="col-span-1 sm:col-span-3"><Link to="/about"><button className="w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">About</button></Link></div>
					<p className="pt-2 col-span-1">Know more my experiences</p>
					<div className="col-span-1 sm:col-span-3 pt-2"><Link to="/mechanical"><button className="w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Experience</button></Link></div>
					<p className="pt-2 col-span-1">Know more my projects</p>
					<div className="col-span-1 sm:col-span-3 pt-2"><Link to="/mechanical_projects"><button className="w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Projects</button></Link></div>
				</div> */}
			</div>
			<br/>
			<Outlet/>
		</div>
		
	);
}

const Home = () => {
	useEffect(() => window.scrollTo(0, 0), []);
	return(
	<div>
		<Nav/>
		<ShortDesc/>
		<Footer/>
	</div>
	);
};

export default Home;