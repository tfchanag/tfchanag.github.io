import React from "react";
import WorkHistory from '../data/work-history.js';
import EducationHistory from "../data/education-history.js";

function Introduction() {
	let preferredName= "Richie Chan";
	let name = "Tsz Fung CHAN";
	let title = "Mechanical Designer / Technologist";
  
	return(
	  <div className="pt-20 text-white">
		<h1 className="text-6xl font-bold">Hi, I'm {preferredName}</h1>
		<h3 className='text-2xl font-semibold pt-2'>{name}</h3>
		<h4 className='text-xl pt-4'>{title}</h4>
	  </div>
	);
  }
  
  function DownloadButton() {
	return(
	  <div className='pt-4 pb-4'>
		<a href='./resume/richieChanResume.pdf' download>
		  <button id='btnDowload' value="download" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
			Download Resume
		  </button>
		</a>
	  </div>
	);
  }
  
  function About() {
	return(
	  <div>
		<p className='text-slate-300 text-lg'>A Junior Mechanical Designer with knowledge of buildings' mechanical systems, mechatronics & mechanical design.
		  I am seeking opportunities to further develop my skills and knowledge and transition into a professional Mechanical Engineer role.
		</p>
  
		<h3 className='text-3xl text-slate-100 pt-5'>Skills</h3>
		<hr></hr>
		<br/>
		<EngineeringSkills/>
	  </div>
	);
  }
  
  function EngineeringSkills() {
	const skills=["SolidWorks", "AutoCAD", "Revit", "Design and Manufacturing", "Control Principles", 
	"Mechatronic", "Building Sevice Mechanical System", "Coordination", "Electrical Technology"];
	return(
	  <ul className='list-disc text-slate-300 text-lg'>
		{skills.map((skill)=>{
		  return(
			<li className='pt-1'>{skill}</li>
		  );
		})}
	  </ul>
	);
  }
  
  function EmploymentHistory() {
	return(
		<div className="text-lg text-slate-300">
			{WorkHistory.map(job => {
				return(
					<section className="flex">
						<img src={job.pic} className="h-20 rounded-full"/>
						<div className="pl-8 pb-5">
							<p>{job.year}</p>
							<p className="font-bold text-xl">{job.title}</p>
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
		<div className="text-lg text-slate-300">
			{EducationHistory.map(school => {
				return(
					<section className="flex">
						<img src={school.pic} className="h-20 rounded-full"/>
						<div className="pl-8 pb-5">
							<p>{school.year}</p>
							<p className="font-bold text-xl">{school.cert}</p>
							<p>{school.school}</p>
							<p className="font-thin italic">Key courses: {school["key-courses-mech"]}</p>
						</div>
					</section>
				);
			})}
		</div>
	);
  }
  
  function MainPage() {
	return(
	  <div className='block object-center'>

		{/* The About Me section */}
		<h3 className='text-3xl text-slate-100'>About Me</h3>
		<hr></hr>
		<br/>
		<About/>
		
		{/* Employment History section */}
		<h3 className='text-3xl text-slate-100 pt-5'>My Experience</h3>
		<hr></hr>
		<br/>
		<EmploymentHistory/>

		{/* Education section */}
		<h3 className='text-3xl text-slate-100 pt-5'>Education</h3>
		<hr></hr>
		<br/>
		<Education/>


	  </div>
	);
  }

const Mechanical = () => {
	return(
		<div className='container mx-auto px-20'>
			<Introduction/>
			<DownloadButton/>
			<MainPage/>
		</div>
	);
};

export default Mechanical;