import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

import Project from '../Project/Project';

const colors = ['pink', 'blue', 'orange', 'purple', 'green', 'yellow'];

const Work = () => {
	const [projects, setProjects] = useState([]);
	const [tags, setTags] = useState(new Set());
	// const [filter, setFilter] = useState('all');

	useEffect(() => {
		getDocs(collection(db, 'projects'))
			.then((querySnapshot) => {
				const newProjectDataArray = querySnapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));

				let tempTags = [];

				newProjectDataArray.forEach((project) => {
					tempTags.push(project.tag);
				});

				setTags(new Set(tempTags));
				setProjects(newProjectDataArray);
			})
			.catch((err) => {
				console.error('Failed to retrieve data', err);
			});
	}, []);

	return (
		<section id='work' className='min-h-screen bg-background text-black'>
			<div className='container mx-auto flex flex-col'>
				<h1 className='text-center text-6xl tracking-wider font-secondary text-pink underline pb-2 mb-4'>
					My Work
				</h1>

				<div className='flex justify-center'>
					{projects && tags.size > 1 && (
						<button className='bg-blue font-secondary uppercase text-3xl px-4 py-1 -rotate-3 border-4 rounded mr-6 drop-shadow-btn transition ease-in duration-200 hover:rotate-0 mb-4 '>
							All
						</button>
					)}

					{projects &&
						Array.from(tags).map((tag) => {
							return (
								tags.size > 1 && (
									<button
										className={`bg-${
											colors[Math.floor(Math.random() * colors.length)]
										} font-secondary uppercase text-3xl px-4 py-1 -rotate-3 border-4 rounded mr-6 drop-shadow-btn transition ease-in duration-200 hover:rotate-0 mb-4`}
									>
										{tag}
									</button>
								)
							);
						})}
				</div>

				<div className='mt-8'>
					<ul className='grid grid-cols-1 gap-4 p-1 text-center md:px-20 lg:px-0 lg:grid-cols-2'>
						{projects &&
							projects.map((project) => {
								return <Project key={project.id} project={project} />;
							})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Work;
