import React from 'react';

import wordcloud from '../assets/wordcloud.png';

const Home = () => {
	return (
		<div className='px-2 min-h-screen bg-background text-primaryLight'>
			<section className='flex flex-col'>
				<div className='flex flex-col lg:flex-row lg:container lg:mx-auto lg:mt-36'>
					<div>
						<h1 className='text-3xl font-semibold font-serif tracking-wide text-center mt-20 md:text-4xl md:mt-10 lg:text-left'>
							Hi I'm Adam, a JavaScript developer.
						</h1>

						<div>
							<p className='text-xl text-center leading-8 font-light mt-10 md:text-2xl md:leading-10 md:mt-6 lg:text-left'>
								I like to build things, whether that involve hardware systems or
								the software that makes the hardware do things. My passion for
								learning has given me a broad range of knowledge across multiple
								disciplines. Recently I have been at NorthCoders learning
								Full-Stack JavaScript.
							</p>
						</div>

						<div className='flex justify-center my-10 md:my-6 lg:justify-start'>
							<button className='mr-4 px-8 py-2 text-xl tracking-widest font-serif border-2 border-accent rounded-3xl transition ease-in-out duration-200 hover:scale-110 lg:text-2xl'>
								Work
							</button>

							<button className='px-8 py-2 text-xl tracking-widest font-serif border-2 border-accent rounded-3xl transition ease-in-out duration-200 hover:scale-110 lg:text-2xl'>
								GitHub
							</button>
						</div>
					</div>

					<div>
						<img
							src={wordcloud}
							alt='World map made of programming terminology'
							className='w-80 mx-auto md:w-[22rem] lg:w-[100rem]'
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
