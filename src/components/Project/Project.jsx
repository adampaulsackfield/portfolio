import React from 'react';
import Button from '../Utils/Button';

import { colors } from '../../colors';

const Project = ({ project }) => {
	return (
		<div className='border-4 mr-6 drop-shadow-btn bg-background py-6'>
			<h1 className='text-4xl text-black font-secondary pt-2'>
				{project.title}
			</h1>

			<div className='flex flex-col px-4'>
				<div className='grid grid-cols-4 gap-1 my-4 lg:grid-cols-6'>
					{project.technologies.map((technology) => {
						return (
							<p
								className={`px-1 py-1 bg-${
									colors[Math.floor(Math.random() * colors.length)]
								} rounded-lg text-md border-4 font-secondary`}
							>
								{technology}
							</p>
						);
					})}
				</div>

				<p className='font-primary text-xl leading-8'>{project.description}</p>

				<div className='mt-6'>
					<a href={project.gitUrl} target='_blank' rel='noreferrer'>
						<Button name='GitHub' color='bg-pink' size='small' />
					</a>
					<a href={project.liveUrl} target='_blank' rel='noreferrer'>
						<Button name='Live Preview' color='bg-blue' size='small' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
