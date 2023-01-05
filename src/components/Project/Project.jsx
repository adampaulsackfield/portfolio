import './Project.scss';
import { useInView } from 'react-intersection-observer';

import Button from '../Button/Button';

const Project = ({ project: { title, img, tags, link, type } }) => {
	const { ref, inView } = useInView({
		threshold: 0,
		delay: 1200,
	});

	const showClasses = 'project hidden-left show';
	const hideClasses = 'project hidden-left';

	return (
		<div className={inView ? showClasses : hideClasses} ref={ref}>
			<img className='project__image' src={img} alt='' />
			<h1 className='project__header'>{title}</h1>

			<hr />

			{tags.map((tag) => (
				<Button text={tag} />
			))}
		</div>
	);
};

export default Project;
