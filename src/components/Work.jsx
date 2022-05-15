import React, { useState, useEffect } from 'react';
import sanityClient from '../client';

import Project from './Project';

const Work = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"]{
        title,
        body,
				liveUrl,
				gitUrl,
				tag,
				imageUrl{
          asset->{
          _id,
          url
        }
      }
    }`
			)
			.then((data) => {
				console.log(data);
				setProjects(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div className='px-2 min-h-screen bg-background text-primaryLight'>
			<section className='flex flex-col container mx-auto'>
				<div>
					<h1 className='text-3xl text-accent font-serif text-center mt-6 mb-4'>
						My Work
					</h1>
				</div>

				<div className='flex justify-center'>
					<button className='mr-2 px-2 py-1 text-md tracking-wide font-serif border-2 border-accent rounded-3xl transition ease-in-out duration-200 hover:scale-110 '>
						Frontend
					</button>

					<button className='mr-2 px-2 py-1 text-md tracking-wide font-serif border-2 border-accent rounded-3xl transition ease-in-out duration-200 hover:scale-110 '>
						Backend
					</button>

					<button className='mr-2 px-2 py-1 text-md tracking-wide font-serif border-2 border-accent rounded-3xl transition ease-in-out duration-200 hover:scale-110 '>
						Full-Stack
					</button>
				</div>

				<div className='mt-8'>
					<ul className='grid grid-cols-1 gap-4 p-1 text-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
						{projects &&
							projects.map((project) => {
								return <Project project={project} />;
							})}
					</ul>
				</div>
			</section>
		</div>
	);
};

export default Work;
