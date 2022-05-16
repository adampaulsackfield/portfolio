import React from 'react';
import {
	FaArrowAltCircleRight,
	FaGithub,
	FaSlack,
	FaEnvelope,
} from 'react-icons/fa';

const About = () => {
	return (
		<div className='px-2 min-h-screen bg-background text-primaryLight'>
			<section className='flex flex-col container mx-auto lg:flex-row'>
				<div>
					<h1 className='text-3xl text-accent font-serif text-center mt-6 mb-4 md:text-4xl lg:text-left lg:mt-24'>
						About Me
					</h1>

					<p className='text-xl text-center font-light mb-4 md:text-2xl md:leading-10 lg:text-left lg:mt-6'>
						I have long been interested in Software Development and the endless
						possibilites that it offers. After recently completing the
						Northcoders Bootcamp in Full-Stack JavaScript I am looking for the
						next challenge in my career. My ideal role would be for a company
						that allows me to continue my growth and developement by continuing
						to learn new technologies and challenging myself.
					</p>

					<p className='text-xl text-center font-light text-primaryDark lg:text-left'>
						As someone who is curious about how the world, and everything in it,
						works; I am constantly trying new technologies, a few of which can
						be seen on here:
					</p>

					<div className='flex justify-center my-4 text-2xl md:text-4xl lg:justify-start lg:text-5xl lg:mt-10'>
						<a
							href='https://github.com/adampaulsackfield'
							target='_blank'
							rel='noreferrer'
						>
							<FaGithub className='mr-4 transition ease-in duration-200 hover:text-accent' />
						</a>
						<a
							href='https://adam-vav4795.slack.com/archives/C03FDK5EWEA'
							target='_blank'
							rel='noreferrer'
						>
							<FaSlack className='mr-4 transition ease-in duration-200 hover:text-accent' />
						</a>

						<a href='mailto:adam@adamsackfield.uk'>
							<FaEnvelope className=' transition ease-in duration-200 hover:text-accent' />
						</a>
					</div>
				</div>

				<div>
					<p className='text-center md:text-xl md:pb-2 lg:mt-24 lg:text-right'>
						A few recent technologies I've been working with recently:
					</p>

					<div className='flex justify-around px-10 mt-2 lg:px-2 lg:py-20 lg:w-96 lg:justify-evenly lg:text-xl'>
						<ul className='mr-12'>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								JavaScript
							</li>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								Node
							</li>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								Express
							</li>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								React
							</li>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								SQL
							</li>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								MongoDB
							</li>
						</ul>

						<ul>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								Jest
							</li>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								Axios
							</li>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								Bcrypt
							</li>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								ThreeJS
							</li>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								ContextAPI
							</li>
							<li>
								<FaArrowAltCircleRight className='text-accent inline mb-2' />{' '}
								GraphQL
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
