import React from 'react';

import Button from '../Utils/Button';

import Hero from '../../assets/images/hero.png';

const Home = () => {
	return (
		<section id='home' className='min-h-screen bg-background text-black'>
			<div className='container mx-auto'>
				<div className='min-h-screen flex items-center flex-col pt-32 lg:flex-row'>
					<div className='flex flex-col text-center lg:w-2/3 lg:text-left lg:pr-32'>
						<div className='flex flex-col justify-center'>
							<h1 className='text-6xl font-secondary uppercase font-bold tracking-wide pb-10'>
								Junior Full-stack developer manchester, UK
							</h1>

							<div className='md:hidden pb-6'>
								<a href='mailto:adam@adamsackfield.uk'>
									<Button name='Get in Touch' color='bg-pink' size='medium' />
								</a>
								<a
									href='https://github.com/adampaulsackfield'
									target='_blank'
									rel='noreferrer'
								>
									<Button name='GitHub' color='bg-blue' size='medium' />
								</a>
							</div>

							<div className='hidden md:block pb-6'>
								<a href='mailto:adam@adamsackfield.uk'>
									<Button
										name='Get in Touch'
										color='bg-pink'
										size='extraLarge'
									/>
								</a>
								<a
									href='https://github.com/adampaulsackfield'
									target='_blank'
									rel='noreferrer'
								>
									<Button name='GitHub' color='bg-blue' size='extraLarge' />
								</a>
							</div>
						</div>

						<div className=''>
							<p className='text-2xl font-primary leading-10 text-center pb-10 lg:text-left'>
								I like to build things, whether that involve hardware systems or
								the software that makes the hardware do things. My passion for
								learning has given me a broad range of knowledge across multiple
								disciplines. Recently I have been at NorthCoders learning
								Full-Stack JavaScript.
							</p>
						</div>
					</div>

					<div className='lg:w-1/3'>
						<img
							src={Hero}
							alt='Graphic of a man at a computer'
							className='w-80 md:w-full'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
