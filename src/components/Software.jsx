import React from "react";

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
		<h3 className='text-3xl text-slate-100'>About</h3>
		<hr></hr>
		<br/>
		<p className='text-slate-300'>As a Junior Mechanical Engineer with knowledge of buildings' mechanical systems, mechatronics & mechanical design, I have designed mechanical systems for residential and hotel projects at Aurecon. 
		  With two years of experience in the construction industry, I possess strong technical communication and problem-solving skills. 
		  I am seeking opportunities to further develop my skills and knowledge and transition into a professional Mechanical Engineer role.
		</p>
  
		<h3 className='text-3xl text-slate-100 pt-5'>Skills</h3>
		<hr></hr>
		<h2 className='text-2xl text-slate-200 pt-5'>Software Skills</h2>
		<SoftwareSkills/>
		<h2 className='text-2xl text-slate-200 pt-5 pb-3'>Engineering Skills</h2>
		<EngineeringSkills/>
  
		
	  </div>
	);
  }
  
  function SoftwareSkills() {
	const skills = [
	  {type: "Java", details: "Developed app UI using JavaFX, backend logic using Java, Website development using Spring Boot framework"},
	  {type: "C#", details: "Created applications using .NET tech., utilized WPF  App development and ADO.NET database"},
	  {type: "Software and System Design", details: "SDLC, UML Diagram, UI/UX design, Development methodologies"},
	  {type: "UI/UX", details: "Designed app UI using Figma"},
	  {type: "Web Development", details: "Designed websites using HTML/CSS, PHP and JavaScript as backend logic, and JSON as data storage. I also used frameworks Spring Boot and Angular to develop websites."},
	  {type: "JavaScript & PHP", details: "Both languages as back-end logic of web application"},
	  {type: "SQL", details: "SQL statement, MongoDB(NoSQL), MySQL, PL/SQL statement, Database design using ER diagram and management using Oracle"},
	  {type: "Linux", details: "Linux commands, Bash Script, System admin using Linux"},
	  {type: "C", details: "Data structure in C language"},
	  {type: "Python", details: "Fundamental Python"},
	  {type: "C++", details: "Wrote Arduino code for mechatronic"}
	];
	return(
	  <div>
		{skills.map((skill)=>{
		  return (
			<div className='grid grid-cols-5 gap-3 pt-2 text-slate-300'>
			  <div className='col-span-1 text-lg'><b>{skill.type}</b></div>
			  <div className='col-span-4'>{skill.details}</div>
			</div>
		  );
		})}
	  </div>
	);
  }
  
  function EngineeringSkills() {
	const skills=["SolidWorks", "AutoCAD", "Revit", "Design and Manufacturing", "Control Principles", 
	"Mechatronic", "Building Sevice Mechanical System", "Coordination", "Electrical Technology"];
	return(
	  <ul className='list-disc text-slate-300'>
		{skills.map((skill)=>{
		  return(
			<li className='pt-1'>{skill}</li>
		  );
		})}
	  </ul>
	);
  }
  
  function EmploymentHistory() {
	
  }
  
  function MainPage() {
	return(
	  <div className='block object-center'>
		<About/>
	  </div>
	);
  }

const Software = () => {
	return(
		<div className='container mx-auto px-20'>
			<Introduction/>
			<DownloadButton/>
			<MainPage/>
		</div>
	);
};

export default Software;