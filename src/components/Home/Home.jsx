import profileImage from '../../assets/images/profile.jpeg';
import { FaGithub, FaLinkedin, FaArrowCircleDown } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

import './Home.scss';

const Home = () => {
	const { ref, inView } = useInView({
		threshold: 0,
		delay: 100,
	});

	const showClasses = 'home hidden-left show';
	const hideClasses = 'home hidden-left';

	return (
		<section id='home' className={inView ? showClasses : hideClasses} ref={ref}>
			<article className='home__details'>
				<h1>
					I'm a <br />
					<span>Junior Software Engineer</span>
				</h1>

				<p>
					As a junior software engineer from Manchester, UK, I am eager to put
					my skills and knowledge to work for a dynamic and innovative company.
					With a dedication to continuous learning and a passion for
					problem-solving, I am confident in my ability to deliver high-quality
					software solutions. I am excited to join a team where I can grow and
					make a meaningful impact.
				</p>

				<button>
					<a href='#skills' style={{ display: 'flex', alignItems: 'center' }}>
						Scroll Down{' '}
						<FaArrowCircleDown fill='#ff4aae' style={{ marginLeft: '12px' }} />
					</a>
				</button>
			</article>

			<figure className='home__image'>
				<img src={profileImage} alt='' />
			</figure>

			<aside className='home__socials'>
				<a
					href='https://github.com/adampaulsackfield'
					target='_blank'
					rel='noreferrer'
				>
					<FaGithub className='home__socials--icon' />
				</a>

				<a href='https://linkedin.com' target='_blank' rel='noreferrer'>
					<FaLinkedin className='home__socials--icon' />
				</a>

				<a href='/home'>
					<a className='home__socials--text' href='./assets/CV.pdf' download>
						CV
					</a>
				</a>
			</aside>
		</section>
	);
};

export default Home;
