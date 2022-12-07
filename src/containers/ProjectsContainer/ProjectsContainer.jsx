import { useEffect } from 'react';
import { useState } from 'react';

import { projects } from '../../assets/data';

import Project from '../../components/Project/Project';

import './ProjectsContainer.scss';

const ProjectsContainer = () => {
	const [filter, setFilter] = useState('');
	const [filtered, setFiltered] = useState(projects);

	useEffect(() => {
		const filteredProjects = projects.filter((project) =>
			project.type.includes(filter)
		);

		setFiltered(filteredProjects);
	}, [filter]);

	return (
		<section className='projects' id='portfolio'>
			<article className='projects__header'>
				<h1>Take a look at my recent work</h1>

				<div className='projects__filter'>
					<span
						onClick={() => setFilter('')}
						className={filter === '' && 'projects__filter--active'}
						href='#'
					>
						All
					</span>
					<span> /</span>
					<span
						onClick={() => setFilter('front-end')}
						className={filter === 'front-end' && 'projects__filter--active'}
					>
						Front-end
					</span>
					<span>/</span>
					<span
						onClick={() => setFilter('back-end')}
						className={filter === 'back-end' && 'projects__filter--active'}
					>
						Back-end
					</span>
					<span>/</span>
					<span
						onClick={() => setFilter('full-stack')}
						className={filter === 'full-stack' && 'projects__filter--active'}
					>
						Full-stack
					</span>
				</div>
			</article>

			<div className='gallery'>
				{filtered.map((project) => (
					<Project project={project} />
				))}
			</div>
		</section>
	);
};

export default ProjectsContainer;
