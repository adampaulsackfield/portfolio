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
								Junior Full-stack developer manchester, uk
							</h1>

							<div className='md:hidden pb-6'>
								<Button name='Get in Touch' color='bg-pink' size='medium' />
								<Button name='GitHub' color='bg-blue' size='medium' />
							</div>

							<div className='hidden md:block pb-6'>
								<Button name='Get in Touch' color='bg-pink' size='extraLarge' />
								<Button name='GitHub' color='bg-blue' size='extraLarge' />
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
						{/* <form action='' className='p-2'>
							<h1 className='text-5xl text-black font-bold -rotate-1 font-secondary uppercase tracking-wider text-center pb-4'>
								Message Me
							</h1>

							<input
								type='text'
								placeholder='Name...'
								className='w-full py-2 px-2 my-2 rounded-md outline-none border-4 border-black -rotate-1 drop-shadow-btn transition ease-in duration-200 focus:border-pink'
							/>

							<input
								type='text'
								placeholder='Email...'
								className='w-full py-2 px-2 my-2 rounded-md outline-none border-4 border-black -rotate-1 drop-shadow-btn transition ease-in duration-200 focus:border-pink'
							/>

							<textarea
								type='text'
								placeholder='Message...'
								rows={6}
								className='w-full py-2 px-2 my-2 rounded-md outline-none border-4 border-black -rotate-1 drop-shadow-btn transition ease-in duration-200 focus:border-pink mb-6'
							/>

							<div className='flex justify-around'>
								<Button name='Send Message' color='bg-orange' size='medium' />
								<Button name='Clear' color='bg-green' size='medium' />
							</div>
						</form> */}

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
