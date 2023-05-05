import { React, useEffect } from "react";
import WorkHistory from '../data/work-history.js';
import EducationHistory from "../data/education-history.js";
import Mechanical_Skills from "../data/mechanical-skills.js";
import CertificateHistory from "../data/certificate.js";
import Icon from "../logo.svg";
import resume from "../resume/RichieChanResume.pdf";

import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";

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
							<a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
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

function Introduction() {
	let preferredName= "Richie Chan";
	let name = "Tsz Fung CHAN";
	let title = "Mechanical Designer / Technologist";
  
	return(
		<div className="pt-2 sm:pt-5 text-white">
			<h1 className="text-2xl sm:text-6xl font-bold">Hi, I'm {preferredName}</h1>
			<h3 className='text-1xl sm:text-2xl font-semibold pt-2'>{name}</h3>
			<h4 className='text-xl pt-4'>{title}</h4>
			<p className="pt-5 text-2xl font-bold text-green-600 italic hover:text-lime-500"><Link to="/mechanical_projects">→→ Checkout my Projects!! ←←</Link></p>
	  	</div>
	);
}
  
function About() {
return(
	<div>
		<p className='text-slate-300 text-base sm:text-lg'>
			An experienced Mechanical Designer with 2 years of experience in mechanical design for buildings. Skilled in plumbing design, 
			Revit BIM MEP and AutoCAD 2D drafting. I am passionate about contributing my knowledge to improve comfort by designing sustainable 
			and cost-efficient systems, preserving and revitalising historical buildings by adding modernized MEP systems to heritage buildings. 
			My goal is to further develop my skills and knowledge and transition into a professional engineering role.
		</p>
		<h3 className='text-xl sm:text-3xl text-slate-100 pt-3 sm:pt-5'>Skills</h3>
		<hr></hr>
		<br/>
		<EngineeringSkills/>
	</div>
);
}
  
function EngineeringSkills() {
var skillList = Mechanical_Skills.join(' | ');
return(
	<div className='list-disc text-slate-300 text-base sm:text-lg'>
		{skillList}
	</div>
);
}
  
function EmploymentHistory() {
return(
	<div className="text-base sm:text-lg text-slate-300">
		{WorkHistory.map(job => {
			return(
				<section className="flex">
					<img src={job.pic} className="h-10 sm:h-20 rounded-full"/>
					<div className="pl-4 pb-3 sm:pl-8 sm:pb-5">
						<p>{job.year}</p>
						<p className="font-bold text-base sm:text-xl">{job.title}</p>
						<p>{job.company}</p>
					</div>
				</section>
				
			);
		})}
	</div>
);
}

function Education() {
return(
	<div className="text-base sm:text-lg text-slate-300">
		{EducationHistory.map(school => {
			return(
				<section className="flex">
					<img src={school.pic} className="h-10 sm:h-20 rounded-full"/>
					<div className="pl-4 pb-3 sm:pl-8 sm:pb-5">
						<p>{school.year}</p>
						<p className="font-bold text-base sm:text-xl">{school.cert}</p>
						<p>{school.school}</p>
						<p className="font-thin italic">Key courses: {school["key-courses-mech"]}</p>
					</div>
				</section>
			);
		})}
	</div>
);
}

function Certificate() {
return(
	<div className="text-base sm:text-lg text-slate-300">
		{CertificateHistory.map(cert => {
			return(
				<section className="flex">
					<img src={cert.pic} className="h-10 sm:h-20 rounded-full"/>
					<div className="pl-4 pb-3 sm:pl-8 sm:pb-5">
						<p>{cert.issued}</p>
						<p className="font-bold text-base sm:text-xl">{cert.name}</p>
						<p>{cert.issuer}</p>
					</div>
				</section>
			);
		})}
	</div>
);
}
  
function MainPage() {
return(
	<div className='sm:block sm:object-center'>

	{/* The About Me section */}
	<h3 className='text-xl sm:text-3xl text-slate-100 pt-2 sm:pt-5'>About Me</h3>
	<hr></hr>
	<br/>
	<About/>
	
	{/* Employment History section */}
	<h3 className='text-xl sm:text-3xl text-slate-100 pt-2 sm:pt-5'>My Experience</h3>
	<hr></hr>
	<br/>
	<EmploymentHistory/>

	{/* Education section */}
	<h3 className='text-xl sm:text-3xl text-slate-100 pt-2 sm:pt-5'>Education</h3>
	<hr></hr>
	<br/>
	<Education/>

	{/* Certificate section */}
	<h3 className='text-xl sm:text-3xl text-slate-100 pt-2 sm:pt-5'>Certificate</h3>
	<hr></hr>
	<br/>
	<Certificate/>

	</div>
);
}

const Mechanical = () => {
	useEffect(() => window.scrollTo(0, 0), []);
	return(
		<div>
			<Nav/>
			<Link to="/">
				<a class="mt-20 sm:mt-24 inline-flex items-center px-4 py-2 text-sm font-medium border rounded-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white">
					<svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
					Home
				</a>
			</Link>
			<Introduction/>
			<MainPage/>
			<Footer/>
		</div>
	);
};

export default Mechanical;