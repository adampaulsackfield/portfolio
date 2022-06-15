import React from 'react';

import Skill from '../Utils/Skill';

const About = () => {
	return (
		<section id='about' className='min-h-screen bg-background text-black'>
			<div className='container mx-auto'>
				<div className='text-center pt-10 lg:text-left'>
					<h1 className='text-6xl font-secondary underline pb-2'>About Me</h1>
					<h2 className='text-2xl text-pink tracking-wider pb-6'>My Story</h2>
				</div>

				<div className='flex flex-col p-2 leading-8 text-xl text-center items-center md:text-2xl md:leading-10 lg:flex-row lg:text-left'>
					<div className='pb-10 lg:w-3/4 lg:pr-32'>
						<p className='pb-6'>
							I have long been interested in Software Development and the
							endless possibilites that it offers. After recently completing the
							Northcoders Bootcamp in Full-Stack JavaScript I am looking for the
							next challenge in my career. My ideal role would be for a company
							that allows me to continue my growth and developement by
							continuing to learn new technologies and challenging myself.
						</p>

						<p className='text-pink text-lg md:text-xl md:leading-10'>
							As someone who is curious about how the world, and everything in
							it, works; I am constantly trying new technologies, I am currently
							focusing on TypeScript.
						</p>
					</div>

					<div className='md:mt-20 lg:w-1/4'>
						<ul className='grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-2 lg:pl-10'>
							<li>
								<Skill name='html5' color='bg-pink' />
							</li>
							<li>
								<Skill name='css3' color='bg-blue' />
							</li>
							<li>
								<Skill name='javascript' color='bg-green' />
							</li>
							<li>
								<Skill name='nodejs' color='bg-orange' />
							</li>
							<li>
								<Skill name='react' color='bg-purple' />
							</li>
							<li>
								<Skill name='mongo' color='bg-yellow' />
							</li>
							<li>
								<Skill name='sql' color='bg-orange' />
							</li>
							<li>
								<Skill name='typescript' color='bg-pink' />
							</li>
						</ul>
						{/* <div className='text-center lg:text-right'>
							<h1 className='text-4xl tracking-wider pb-6'>
								Where to get in touch
							</h1>

							<div className='flex flex-col space-y-3'>
								<p className='text-lg'>
									<span className='text-pink text-lg'>Name: </span>
									<Button
										name='Adam Sackfield'
										color='bg-orange'
										size='small'
									/>
								</p>

								<p className='text-lg'>
									<span className='text-pink text-lg'>Location: </span>

									<Button name='Manchester, UK' color='bg-green' size='small' />
								</p>

								<p className='text-lg'>
									<span className='text-pink text-lg'>Email: </span>
									<Button
										name='adam@adamsackfield.uk'
										color='bg-blue'
										size='small'
									/>
								</p>

								<p className='text-lg'>
									<span className='text-pink text-lg'>Available: </span>
									<Button name='Hire Me' color='bg-pink' size='small' />
								</p>
							</div>

							<div className='pt-6'>
								<ul className='flex flex-row justify-center space-x-6'>
									<li>
										<AiFillGithub className='text-4xl' />
									</li>
									<li>
										<AiFillSlackCircle className='text-4xl' />
									</li>
									<li>
										<AiFillMail className='text-4xl' />
									</li>
								</ul>

								<p className='py-10'>
									<Button name='Download Resume' color='bg-blue' size='large' />
								</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
