import { React, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Icon from "../logo.svg";
import resume from "../resume/RichieChanResume.pdf";
import HKUST from "../images/About/HKUST.jpg";
import mechanical from "../images/About/mechanical.jpeg";
import mecha from "../images/About/mecha.jpg";
import amsterdam from "../images/About/Amsterdam.JPG";
import TTC from "../images/About/TTC.jpg";
import VEX from "../images/About/vex.png";
import FYP from "../images/About/FYP.jpg";
import FYP2 from "../images/About/FYP2.jpg";
import Chateau from "../images/About/Chateau.webp";
import SFR from "../images/About/SFR.jpg";
import AUR from "../images/About/AUR.jpg";
import AUR2 from "../images/About/AUR2.jpg";
import now from "../images/About/Now.jpg";
import sheridanCert from "../images/About/SheridanCert.jpg";
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
							<a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
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

function AboutMe() {
	return(
		<div className="pt-2 sm:pt-5">
			<p className="text-2xl font-bold text-white sm:text-6xl pb-5">My Journey</p>
			<ol class="relative border-l border-gray-200 dark:border-gray-700">                  
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">September 2015</time>
					<h3 class="text-lg font-semibold text-white">Study at HKUST</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						Through endeavour and will power, I was accepted in one of the most prestige university in Hong Kong - <a href="https://hkust.edu.hk/" target="_blank" className="italic text-blue-500 font-semibold underline">The Hong Kong University of Science and Technology</a> 
						&nbsp;and enrolled in Bachleor in Engineering Program.
					</p>
					<div className="sm:w-1/3">
						<figure className="inline-block max-w-sm">
							<img src={HKUST} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								The sun dial in front of campus
							</figcaption>
						</figure>
					</div>
					
					
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">February 2016</time>
					<h3 class="text-lg font-semibold text-white">Intern at Technology Transfer Center</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						Got a opputunities to work at the <a href="https://okt.hkust.edu.hk/" target="_blank" className="italic text-blue-500 font-semibold underline">Technology Transfer Center of HKUST</a>.
						&nbsp;Learned a lot about contract law, technology's patent related procedures and legal terms. Have been Working there for 2 years, gained lots of contract knowledge there.
					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<img src={TTC} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								The front door of TTC
							</figcaption>
						</figure>
					</div>
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">September 2016</time>
					<h3 class="text-lg font-semibold text-white">Mechanical Engineering</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						I chose major in mechanical engineering, not only for the love of mecha robots, also I wanted my future career to be helpful to the society and 
						improving citizen's wellbeing. Renewable energy, machinery, product design and Air-con are all mechancial, 
						so at the end I chose mechanical engineering.
					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<div className="flex gap-1 sm:gap-2">
								<img src={mechanical} className="w-1/2 rounded-lg"/>
								<img src={mecha} className="w-1/2 rounded-lg"/>
							</div>
							<figcaption className="text-sm text-neutral-400 mt-1">
								Mechanical Engineer and My Mecha Robots Collection
							</figcaption>
						</figure>
					</div>
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">September 2017</time>
					<h3 class="text-lg font-semibold text-white">Exchange in Netherland</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						I went to <a href="https://www.tue.nl/en/" target="_blank" className="italic text-blue-500 font-semibold underline">Eindhoven University of Technology</a> 
						&nbsp;as an exchange student for 6 months, I was amazed how industrial focus their mechanical engineering program are. Even fluid dynamic they taught 
						were industrial piping theory. Since Netherland has a lot of historical buildings, I started to grow interest in how they renovate and 
						the heritage buildings and modernize it by adding MEP system to it.
					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<img src={amsterdam} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								Rijksmuseum, taken when I am in Amsterdam
							</figcaption>
						</figure>
					</div>
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">July 2018</time>
					<h3 class="text-lg font-semibold text-white">Work at Brainchild</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						<a href="http://brainchildltd.com/" target="_blank" className="italic text-blue-500 font-semibold underline">Brainchild</a> was my second company 
						I worked with. Taught kids built VEX robot for VEX IQ competition, DIY anything they have in mind and write simple programming. It was challenging since children 
						have a lot of ideas, I fulfilled them using limited tools and material. But, it's fun to work with children on projects.
					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<img src={VEX} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								A VEX IQ robot, similar to what the kids made
							</figcaption>
						</figure>
					</div>
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">September 2018</time>
					<h3 class="text-lg font-semibold text-white">Final Year Project</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						I worked under Prof. Huihe QIU, designed an Ultralight Insect Like Flying Robot. It was a exciting project, since the body weight
						of the robot have to be light, the material had to be light and at the same time can withhold the force from motor. Flapping wing 
						motion was difficult to replicate in a tiny robot.
					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<img src={FYP} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								The aerial view of the final product
							</figcaption>
						</figure>
					</div>
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">March 2019</time>
					<h3 class="text-lg font-semibold text-white">Scored "A" for FYP!!!</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						With the help of my team members and Prof. QIU, we completed the FYP with excellency. I scored an "A" for this project, 
						I am proud of myself and my team.
						<br/>
						<br/>
						Checkout the final product <Link to="/fyp" className="italic text-blue-500 font-semibold underline">HERE</Link>

					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<img src={FYP2} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								The side view of the final product
							</figcaption>
						</figure>
					</div>
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">April 2019</time>
					<h3 class="text-lg font-semibold text-white">Deciding My Future</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						My university journey is near the end, and my future career is yet to decide. Then I stumble appon this TV series, <a 
						href="https://en.wikipedia.org/wiki/Escape_to_the_Chateau" target="_blank" className="italic text-blue-500 font-semibold 
						underline">Escape to the Chateau</a>. Watching this married couple bought an old Chateau in France with cheap price and 
						transferring it into a modernized Chateau with elevator, electricity, gas and lighting. I was fasinated how they design 
						and construct all of those all by themselves. I was inspired that I wanted to do something like them, design and construct 
						MEP system for buildings, make living space enjoyable and comfortable.
					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<img src={Chateau} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								Picture from Escape to the Chateau
							</figcaption>
						</figure>
					</div>
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">July 2019</time>
					<h3 class="text-lg font-semibold text-white">Construction MEP Job</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						After a long time of job search and rounds of interviews, I landed my job as Assistant Building Service Engineer in <a href="https://www.hiphing.com.hk/en/" target="_blank" className="italic text-blue-500 font-semibold underline">Hip Hing</a>. 
						My first ever project was to coordinate and inspect the MEP construction on-site for residential high-rise buildings.
					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<img src={SFR} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								Koko Hills in construction
							</figcaption>
						</figure>
					</div>
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">Mar 2020</time>
					<h3 class="text-lg font-semibold text-white">A MEP Consultant</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						I wanted to learn more about how to design MEP system and my goal was to become a licensed professional engineer in the future. 
						So I joined <a href="https://www.aurecongroup.com/" target="_blank" className="italic text-blue-500 font-semibold underline">Aurecon</a> as 
						an Assisant Mechanical Engineer. I was given 3+ projects to work on, learned and designed mechanical system on the job for high-rise residential,
						entertainment and commercial buildings. I have designed solar hot water, greay water and rainwater recycling system, which was one of my objective, 
						improving my city using green technologies. I was fortunate to work with these talented coworkers and innovative projects.
					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<img src={AUR} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								Breakfast before a Saturday OT
							</figcaption>
						</figure>
					</div>
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">July 2021</time>
					<h3 class="text-lg font-semibold text-white">Leaving Hong Kong</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						With everything happened in Hong Kong socially and politically. I decided to leave Hong Kong and start over again in Canada. 
						Unfortunatly I have to leave Aurecon, it was great year working with lots of excellent seniors and managers.
					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<img src={AUR2} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								The front door of Aurecon Hong Kong Office
							</figcaption>
						</figure>
					</div>
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">January 2023</time>
					<h3 class="text-lg font-semibold text-white">Completed Study in Canada and Get PR</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						After a year and a half, I have finished a diploma in <a href="https://www.sheridancollege.ca/" target="_blank" className="italic text-blue-500 font-semibold underline">Sheridan College</a>. 
						Fulfilling my requirment to get a permenant resident status in Canada.
					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<img src={sheridanCert} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								My diploma certificate
							</figcaption>
						</figure>
					</div>
				</li>
				<li class="mb-10 ml-4">
					<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time class="mb-1 text-sm font-normal leading-none text-gray-500">February 2023</time>
					<h3 class="text-lg font-semibold text-white">Job Searching in Toronto's MEP Industry</h3>
					<p class="mb-4 text-base font-normal text-slate-300">
						Now, I can shift my focus on starting a career in Canada. With the AutoCAD and Revit certificates I earned from Autodesk, 
						experiences I gained from my journey, I am striving for opputunities in Toronto's MEP industry. Hoping I could contribute to 
						Canada's carbon zero target and improving the wellbing of the Canadians through designing outstanding MEP systems.
					</p>
					<div className="sm:w-1/3 w-full">
						<figure className="inline-block max-w-sm">
							<img src={now} className="rounded-lg"/>
							<figcaption className="text-sm text-neutral-400 mt-1">
								Maple trees in Conservation Park during Fall season
							</figcaption>
						</figure>
					</div>
				</li>
			</ol>
		</div>
	);
};

const About = () => {
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
			<AboutMe/>
			<Footer/>
		</div>
	);
};

export default About;