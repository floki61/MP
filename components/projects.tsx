// 'use client'
// import { Button } from './ui/button';
// import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TracingBeam } from './ui/tracing-beam';


const projects = [
	{
		id: 1,
		projectName: "Port-folio",
		sector: "Web ,Rigor",
		gitHubUrl: "https://github.com/floki61/transcendence",
		description: 'A full stack web application based on the Mighty Pong Game, with social media features and a leaderboard. The web application is built using Typescript and Next for the frontend, and NestJS for the backend. The database is a PostgreSQL database, and the application is deployed on using Docker..',
	},
	{
		id: 2,
		projectName: "Ping-Pong",
		sector: "Web ,Group & interpersonal ,Rigor",
		gitHubUrl: "https://github.com/floki61/transcendence",
		description: 'A full stack web application based on the Mighty Pong Game, with social media features and a leaderboard. The web application is built using Typescript and Next for the frontend, and NestJS for the backend. The database is a PostgreSQL database, and the application is deployed on using Docker..',
	},
	{
		id: 3,
		projectName: "Ince-ption",
		sector: 'Network & system administration, Rigor',
		gitHubUrl: "https://github.com/floki61/inception",
		description: 'The Inception project is designed to provide a hands-on exploration of system administration, with a specific focus on leveraging Docker ation.',
	},
	{
		id: 4,
		projectName: "Web-Serv",
		sector: 'Unix ,Network & system administration ,Rigor ,Object-oriented programming',
		gitHubUrl: "https://github.com/medfx69/webserver",
		description: 'This project focuses on implementing a custom HTTP server in C++ 98, providing hands-on experience with the HTTP protocol and system administration for web servers. The project aims to understand the intricacies of URL, HTTP, and web server functionality.',
	},
]
const ProjectsLaptop = () => {
	return (
		<div className='space-y-28 pt-12'>
			{projects.map((project) => (
				<div className="flex ">
					<div className=" text-white flex flex-col  space-y-5">
						<div className="flex-1 justify-center  flex flex-col">
							<p className="" id='projectIndex'>{project.projectName.replace('-', '')}</p>
							<h4 className=" font-custom opacity-60">{project.sector}</h4>
							<h4 className="py-4  font-anton" style={{ lineHeight: '1.5' }}>
								{project.description}
							</h4>
							<div className=' flex flex-wrap gap-2 font-custom'>
								{/* <Button variant="outline" className='h-[4vw]'><h5>ui design</h5></Button> */}
								{/* <Button variant="outline" className='h-[4vw]'><h5>ux research</h5></Button> */}
								{/* <Button variant="outline" className='h-[4vw]'><h5>frontend</h5></Button> */}
								{/* <Button variant="outline" className='h-[4vw]'><h5>backend</h5></Button> */}
								{/* <Button variant="outline" className='h-[4vw]'><h5>dev-ops</h5></Button> */}
							</div>

							{/* <Button variant="link" className='font-anton bg-slate-100 -left-1/2 h-4 w-4'>Coude Source</Button> */}
						</div>
						<div className="flex-1 relative">
							<div className='space-y-2 h-[40vw]' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<Image className="" src="/bg.jpg" alt='image' fill objectFit="cover" />
							</div>
							<div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 break-words uppercase" id='projects' style={{ lineHeight: '1', textAlign: 'center', marginTop: '5px' }}>
								{project.projectName}
							</div>
						</div>

						<div>
							<a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer" className=' flex w-full justify-center'>
								{/* <Button variant="default" className=' h-[7vw] font-anton border text-[2vw] bg-neutral-800  text-white'>Coude Source</Button> */}
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
const ProjectsDesktop = () => {
	return (
		<div className="flex flex-col space-y-56 pt-8">
			{projects.map((project) => (
				<>
					{project.id % 2 == 1 ? (
						<section className=" text-white flex flex-row  gap-14">
							<div className="flex-1  relative">
								<div className='space-y-2 h-[40vw]'>
									<Image className="" src="/bg.jpg" alt='image' fill objectFit="cover" />
								</div>
								<div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 break-words uppercase" id='projects' style={{ lineHeight: '1' }}>
									{project.projectName}
								</div>
							</div>
							<div className="flex-1 justify-center  flex flex-col ">
								<p className="" id='projectIndex'>{project.projectName.replace('-', '')}</p>
								<p className="w-16 h-px bg-green-500"></p>
								<h4 className=" font-custom pt-2 opacity-60">{project.sector}</h4>
								<h4 className="pt-12 font-anton" style={{ lineHeight: '1.5' }}>
									{project.description}
								</h4>
								<div className=' flex flex-wrap gap-2 font-custom pt-3'>
									{/* <Button variant="outline" className='h-[4vw]'><h5>ui design</h5></Button> */}
									{/* <Button variant="outline" className='h-[4vw]'><h5>ux research</h5></Button> */}
									{/* <Button variant="outline" className='h-[4vw]'><h5>frontend</h5></Button> */}
									{/* <Button variant="outline" className='h-[4vw]'><h5>backend</h5></Button> */}
									{/* <Button variant="outline" className='h-[4vw]'><h5>dev-ops</h5></Button> */}
								</div>
								<div>
									<a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer" className=' flex w-full pt-12'>
										{/* <Button variant="default" className='  h-[3vw] font-anton border text-[1vw] bg-zinc-800  text-white'>Coude Source</Button> */}
									</a>
								</div>
							</div>
						</section>
					) : (
						<section className=" text-white flex flex-row  gap-14 ">
							<div className="flex-1 justify-center  flex flex-col ">
								<p className="" id='projectIndex'>{project.projectName.replace('-', '')}</p>
								<p className="w-16 h-px bg-green-500"></p>
								<h4 className=" font-custom pt-16 opacity-60">{project.sector}</h4>
								<h4 className="py-4  font-anton" style={{ lineHeight: '1.5' }}>
									{project.description}
								</h4>
								<div className=' flex flex-wrap gap-2 font-custom'>
									{/* <Button variant="outline" className='h-[4vw]'><h5>ui design</h5></Button> */}
									{/* <Button variant="outline" className='h-[4vw]'><h5>ux research</h5></Button> */}
									{/* <Button variant="outline" className='h-[4vw]'><h5>frontend</h5></Button> */}
									{/* <Button variant="outline" className='h-[4vw]'><h5>backend</h5></Button> */}
									{/* <Button variant="outline" className='h-[4vw]'><h5>dev-ops</h5></Button> */}
								</div>

								<div>
									<a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer" className=' flex w-full pt-12'>
										{/* <Button variant="default" className='  h-[3vw] font-anton border text-[1vw]  bg-neutral-800  text-white'>Coude Source</Button> */}
									</a>
								</div>
								{/* <Button variant="link" className='font-anton  border bg-neutral-800 w-[14vw] text-white'>Coude Source</Button> */}
							</div>
							<div className="flex-1 relative">
								<div className='space-y-2 h-[40vw]'>
									<Image className="" src="/bg.jpg" alt='image' fill objectFit="cover" />
								</div>
								<div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 break-words uppercase" id='projects' style={{ lineHeight: '1' }}>
									{project.projectName}
								</div>
							</div>
						</section>
					)}
				</>
			))}
		</div>
	)
}

export default function Projects() {
	const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			setIsDesktopOrLaptop(window.innerWidth >= 640);
		};

		handleResize(); // Set initial value
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 640px)' });
	return (

			<div className=" bg-black">
				<div className="container mx-auto h-full p-16 bg-[black]">
					<div className='flex flex-col justify-center sm:pt-32 pt-12'>
						<p className='font-meledrama font-bold text-2xl'>
							<span className=' text-green-700'>2. </span>
							<span className='text-white'> Projects</span>
						</p>
						<div className="text-white">
							<h2>I've worked some amazing projects!</h2>
							<div className="w-16 border border-green-700 leading-4 mb-6 "></div>
						</div>
					</div>
					<div>
						{isDesktopOrLaptop ? (
							<ProjectsDesktop />
						) : (
							<ProjectsLaptop />
						)}
					</div>
				</div>
			</div >
	)
}