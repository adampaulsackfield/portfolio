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
	FaJava,
	FaDocker,
} from 'react-icons/fa';
import { SiJest, SiCypress, SiTypescript } from 'react-icons/si';

const Skills = () => {
	return (
		<IconContext.Provider value={{ className: 'skills__icons--icon' }}>
			<section className='skills' id='skills'>
				<article className='skills__content'>
					<h1 className='skills__content--header'>Skills</h1>

					<p className='skills__content--text'>
						As a software engineer, I have developed a range of technical skills
						including and I am constantly seeking out opportunities to learn and
						expand my abilities. Here are a few of my skills
					</p>
				</article>

				<article className='skills__icons'>
					<div className='skills__icons--wrapper'>
						<FaGitAlt fill='#474650' />
						<p className='skills__icons--text'>Git</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaHtml5 fill='#474650' />
						<p className='skills__icons--text'>HTML5</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaCss3 fill='#474650' />
						<p className='skills__icons--text'>CSS3</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaSass fill='#474650' />
						<p className='skills__icons--text'>SCSS</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaJs fill='#474650' />
						<p className='skills__icons--text'>JavaScript</p>
					</div>

					<div className='skills__icons--wrapper'>
						<SiTypescript fill='#474650' />
						<p className='skills__icons--text'>JavaScript</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaNodeJs fill='#474650' />
						<p className='skills__icons--text'>NodeJS</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaReact fill='#474650' />
						<p className='skills__icons--text'>React</p>
					</div>

					<div className='skills__icons--wrapper'>
						<SiJest fill='#ff0000' />
						<p className='skills__icons--text'>Jest</p>
					</div>

					<div className='skills__icons--wrapper'>
						<SiCypress fill='#474650' />
						<p className='skills__icons--text'>Cypress</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaJava fill='#474650' />
						<p className='skills__icons--text'>Java</p>
					</div>

					<div className='skills__icons--wrapper'>
						<FaDocker fill='#474650' />
						<p className='skills__icons--text'>Docker</p>
					</div>
				</article>
			</section>
		</IconContext.Provider>
	);
};

export default Skills;
