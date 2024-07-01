// 'use client'
// import { Button } from './ui/button';
// import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { TracingBeam } from './ui/tracing-beam';
import copy from 'clipboard-copy';


const projects = [
	{
		id: 1,
		projectName: "Pong-Game",
		sector: "Web ,Group & interpersonal ,Rigor",
		gitHubUrl: "https://github.com/floki61/transcendence",
		description: 'A full stack web application based on the Mighty Pong Game, with social media features and a leaderboard. The web application is built using Typescript and Next for the frontend, and NestJS for the backend. The database is a PostgreSQL database, and the application is deployed on using Docker',
	},
	{
		id: 2,
		projectName: "UM6P-Intranet",
		sector: "Web ,Group & interpersonal ,Rigor",
		gitHubUrl: "https://github.com/floki61/transcendence",
		description:"The UM6P Intranet project was a significant endeavor where I played a crucial role in its development. It involved creating a comprehensive platform that catered to the diverse needs of university departments and members. My responsibilities primarily focused on enhancing the user interface to ensure optimal usability and experience. I integrated various frontend components, ensuring seamless interaction and intuitive navigation. This project highlighted my ability to contribute effectively to complex web applications, utilizing technologies like Next.js and TypeScript to deliver robust and user-friendly solutions.",
	},
	{
		id: 3,
		projectName: "Van-ai",
		sector: 'Web ,Rigor',
		gitHubUrl: "https://github.com/floki61/inception",
		description: "I spearheaded frontend development for a dynamic platform, orchestrating the creation of sleek, responsive landing and sales pages powered by Next.js and TypeScript. I orchestrated the integration of Django and Djoser for seamless user authentication, ensuring a secure and user-friendly experience. Additionally, I crafted comprehensive documentation using Nextra, empowering users with clear insights into the platform's functionalities.",
	},
]
const ProjectsLaptop = () => {
	return (
		<div className='space-y-28 pt-12'>
			{projects.map((project) => (
				<div className="flex ">
					<div className=" text-primary flex flex-col  space-y-5">
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
								{/* <Button variant="default" className=' h-[7vw] font-anton border text-[2vw] bg-neutral-800  text-primary'>Coude Source</Button> */}
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
						<section className=" text-primary flex flex-row  gap-14">
							<div className="flex-1  relative">
								<div className='space-y-2 h-[40vw]'>
									<Image className="" src="/bg.jpg" alt='image' fill objectFit="cover" />
								</div>
								<div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 break-words uppercase hover:text-secondary z-50" id='projects' style={{ lineHeight: '1' }}>
									{project.projectName}
								</div>
							</div>
							<div className="flex-1 justify-center  flex flex-col ">
								<p className="text-secondary" id='projectIndex'>{project.projectName.replace('-', '')}</p>
								<p className="w-16 h-px bg-secondary"></p>
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
										{/* <Button variant="default" className='  h-[3vw] font-anton border text-[1vw] bg-zinc-800  text-primary'>Coude Source</Button> */}
									</a>
								</div>
							</div>
						</section>
					) : (
						<section className=" text-primary flex flex-row  gap-14 ">
							<div className="flex-1 justify-center  flex flex-col ">
								<p className="text-secondary" id='projectIndex'>{project.projectName.replace('-', '')}</p>
								<p className="w-16 h-px bg-secondary"></p>
								<h4 className=" font-custom pt-2 opacity-60">{project.sector}</h4>
								<h4 className="pt-12  font-anton" style={{ lineHeight: '1.5' }}>
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
										{/* <Button variant="default" className='  h-[3vw] font-anton border text-[1vw]  bg-neutral-800  text-primary'>Coude Source</Button> */}
									</a>
								</div>
								{/* <Button variant="link" className='font-anton  border bg-neutral-800 w-[14vw] text-primary'>Coude Source</Button> */}
							</div>
							<div className="flex-1 relative">
								<div className='space-y-2 h-[40vw]'>
									<Image className="" src="/bg.jpg" alt='image' fill objectFit="cover" />
								</div>
								<div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 break-words uppercase hover:text-secondary z-50" id='projects' style={{ lineHeight: '1' }}>
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
	const text = 'omarelberhichipro@gmail.com';
	const [isCopied, setIsCopied] = useState(false);
	const handleCopyClick = async () => {
		try {
			await copy(text);
			setIsCopied(true);
		} catch (error) {
			console.error('Failed to copy text to clipboard', error);
		}
	};

	// const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 640px)' });
	return (

		<div className="container mx-auto p-4 md:p-26 h-full pb-0 pt-0 bg-black">
			<div className='p-10 sm:pt-36 pt-24'>
				<div className='flex flex-col justify-center'>
					<p className='font-meledrama font-bold text-2xl'>
						<span className='text-secondary'> Projects</span>
					</p>
					<div className="text-primary">
						<h2>I've worked some amazing projects!</h2>
						<div className="w-16 border border-primary leading-4 mb-6 "></div>
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
			<div className=' h-96 p-10'>
				<div className='flex flex-col justify-end h-full'>
					<span className='text-secondary font-meledrama font-bold text-2xl'>Sure, let's Talk</span>
					<span className='text-primary font-Poppins pt-4 text-sm sm:text-2xl font-extralight'>this is my e-mail if you want to reach out</span>
					<button
						onClick={handleCopyClick}
						className='relative text-primary pt-12 text-xl sm:3xl md:text-5xl lg:text-6xl font-extrabold font-anton border-b w-fit pb-6 border-primary z-50 hover:text-secondary hover:duration-700 hover:pl-6'
					>
						omarelberhichipro@gmail.com
						<span className="absolute left-0 pl-7 pb-7  opacity-0 transition-opacity  hover:opacity-100 hover:duration-700 text-sm text-primary h-20 w-full text-end">
							{isCopied ? 'Done' : 'Copy email'}
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}