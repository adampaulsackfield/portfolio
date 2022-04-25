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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>

					<p className='text-xl text-center font-light text-primaryDark lg:text-left'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
						egestas fringilla phasellus faucibus scelerisque eleifend donec
						pretium. Dui ut ornare lectus sit amet.
					</p>

					<div className='flex justify-center my-4 text-2xl md:text-4xl lg:justify-start lg:text-5xl lg:mt-10'>
						<FaGithub className='mr-4 transition ease-in duration-200 hover:text-accent' />
						<FaSlack className='mr-4 transition ease-in duration-200 hover:text-accent' />
						<FaEnvelope className=' transition ease-in duration-200 hover:text-accent' />
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
