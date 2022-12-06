import './Skills.scss';
import { IconContext } from 'react-icons';
import {
	FaGitAlt,
	FaHtml5,
	FaCss3,
	FaJs,
	FaSass,
	FaReact,
	FaNodeJs,
} from 'react-icons/fa';
import { SiJest, SiCypress } from 'react-icons/si';

const Skills = () => {
	return (
		<IconContext.Provider value={{ className: 'skills__icons--icon' }}>
			<section className='skills' id='skills'>
				<article className='skills__content'>
					<h1 className='skills__content--header'>Skills</h1>

					<p className='skills__content--text'>
						Egestas dictumst enim dui ante nisl risus commodo. Pellentesque
						dignissim praesent purus in neque erat et. Cras donec ut orci eget
						neque bibendum cras. Vitae, ultricies arcu pretium duis.
					</p>
				</article>

				<article className='skills__icons'>
					<div className='skills__icons--wrapper'>
						<FaGitAlt />
						<p className='skills__icons--text'>Git</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaHtml5 />
						<p className='skills__icons--text'>HTML5</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaCss3 />
						<p className='skills__icons--text'>CSS3</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaSass color='#ff0000' />
						<p className='skills__icons--text'>SCSS</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaJs />
						<p className='skills__icons--text'>JavaScript</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaNodeJs />
						<p className='skills__icons--text'>NodeJS</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaReact />
						<p className='skills__icons--text'>React</p>
					</div>

					<div className='skills__icons--wrapper'>
						<SiJest />
						<p className='skills__icons--text'>Jest</p>
					</div>

					<div className='skills__icons--wrapper'>
						<SiCypress />
						<p className='skills__icons--text'>Cypress</p>
					</div>
				</article>
			</section>
		</IconContext.Provider>
	);
};

export default Skills;
