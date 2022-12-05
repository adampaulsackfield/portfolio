import profileImage from '../../assets/images/unsplash_rriAI0nhcbc.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
					Hi, I'm Adam. Egestas dictumst enim dui ante nisl risus commodo.
					Pellentesque dignissim praesent purus in neque erat et. Cras donec ut
					orci eget neque bibendum cras. Vitae, ultricies arcu pretium duis.
				</p>
				<button>
					Scroll Down
					<i className='fa fa-circle-down'></i>
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
					<p className='home__socials--text'>CV</p>
				</a>
			</aside>
		</section>
	);
};

export default Home;
