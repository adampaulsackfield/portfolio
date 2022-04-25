import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
	return (
		<div className='border-[1px] border-white rounded-xl'>
			<h1 className='text-2xl text-accent font-serif mt-4 mb-2'>
				{project.title}
			</h1>

			<img src={project.imageUrl} alt='' className='w-full mb-4' />

			<p className=''>{project.body}</p>

			<div className='py-4'>
				<button className='mr-2 px-2 py-1 text-md tracking-wide font-serif border-2 border-accent rounded-3xl transition ease-in-out duration-200 hover:scale-110'>
					<Link to={project.liveUrl} target='_blank'>
						View Live
					</Link>
				</button>
				<button className='mr-2 px-2 py-1 text-md tracking-wide font-serif border-2 border-accent rounded-3xl transition ease-in-out duration-200 hover:scale-110'>
					<Link to={project.gitUrl} target='_blank'>
						GitHub
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Project;
