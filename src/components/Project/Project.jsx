import './Project.scss';

import Button from '../Button/Button';

const Project = ({ project: { title, img, tags, link, type } }) => {
	return (
		<div class='project'>
			<img src={img} alt='' />
			<h1 className='project__header'>{title}</h1>

			<hr />

			{tags.map((tag) => (
				<Button text={tag} />
			))}
		</div>
	);
};

export default Project;
