import './Project.scss';
import { useInView } from 'react-intersection-observer';

const Project = ({ project: { title, img, source, live, type, tags } }) => {
	const { ref, inView } = useInView({
		threshold: 0,
		delay: 1200,
	});

	const showClasses = 'project hidden-left show';
	const hideClasses = 'project hidden-left show';

	return (
		<div className={inView ? showClasses : hideClasses} ref={ref}>
			<h1 className='project__header'>{title}</h1>

			<ul className='project__tags'>
				{tags.map((tag) => {
					return <li className='project__tags-tag'>{tag}</li>;
				})}
			</ul>

			<img className='project__image' src={img} alt='' />

			<div className='project__links'>
				<a
					href={source}
					className='project__links-link'
					target='_blank'
					rel='noreferrer'
				>
					View GitHub
				</a>
				{live !== '' && (
					<a
						href={live}
						className='project__links-link'
						target='_blank'
						rel='noreferrer'
					>
						View Live
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
