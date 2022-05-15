import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = ({ project }) => {
	return (
		<div className='border-[1px] border-white rounded-xl'>
			<h1 className='text-2xl text-accent font-serif mt-4 mb-2'>
				{project.title}
			</h1>

			<img src={project.imageUrl.asset.url} alt='' className='w-full mb-4' />

			<p className='px-2'>{project.body}</p>

			<div className='py-4'>
				<button className='mr-2 px-2 py-1 text-md tracking-wide font-serif border-2 border-accent rounded-3xl transition ease-in-out duration-200 hover:scale-110'>
					<a href={project.liveUrl} target='_blank' rel='noreferrer'>
						View Live
					</a>
				</button>
				<button className='mr-2 px-2 py-1 text-md tracking-wide font-serif border-2 border-accent rounded-3xl transition ease-in-out duration-200 hover:scale-110'>
					<a href={project.gitUrl} target='_blank' rel='noreferrer'>
						View <FaGithub className='inline' />
					</a>
				</button>
			</div>
		</div>
	);
};

export default Project;
