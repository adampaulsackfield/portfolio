import './Journey.scss';
import { FaCaretUp } from 'react-icons/fa';

import profileImage from '../../assets/images/profile.jpeg';

const Journey = () => {
	return (
		<section className='journey'>
			<h1 className='journey__header'>My Journey</h1>

			<div className='journey__text'>
				<p>
					Ut fermentum vitae ut volutpat arcu, consectetur turpis etiam. Etiam
					felis id nibh sed convallis et laoreet in. Bibendum pharetra ipsum,
					mauris at eu, fusce imperdiet eget velit. Mattis id sed pretium
					aliquet blandit eros, in.
				</p>
				<p>
					Cum eget lobortis mattis eu dictum. Placerat tellus feugiat egestas mi
					cursus metus gravida scelerisque. Viverra blandit vitae eget odio
					morbi quam lectus iaculis.
				</p>
			</div>

			<article className='journey__image'>
				<img src={profileImage} alt='' />
			</article>

			<article className='journey__experience'>
				<h2 className='accent'>Experience</h2>

				<article className='experience'>
					<div className='experience__item'>
						<h1 className='experience__item-header'>
							Technical Specialist @ Apple
							<FaCaretUp fill='#ff4aae' style={{ float: 'right' }} />
						</h1>
						<h2 className='experience__item-date'>October 19 - Present</h2>

						<ul>
							<li>Varius sed mi ac eu, purus tincidunt blandit at ipsum</li>
							<li>
								Blandit posuere mauris, consequat at tincidunt vel, faucibus
								cras. Lorem nunc amet, eu et scelerisque.
							</li>
						</ul>
					</div>

					<hr />

					<div className='experience__item'>
						<h1 className='experience__item-header'>
							Junior DevOps Cloud Engineer @ Nology
							<FaCaretUp fill='#ff4aae' style={{ float: 'right' }} />
						</h1>
						<h2 className='experience__item-date'>Nov 22 - Present</h2>

						<ul>
							<li>Varius sed mi ac eu, purus tincidunt blandit at ipsum</li>
							<li>
								Blandit posuere mauris, consequat at tincidunt vel, faucibus
								cras. Lorem nunc amet, eu et scelerisque.
							</li>
						</ul>
					</div>

					<hr />

					<div className='experience__item'>
						<h1 className='experience__item-header'>
							Trainee Software Engineer @ NorthCoders
							<FaCaretUp fill='#ff4aae' style={{ float: 'right' }} />
						</h1>
						<h2 className='experience__item-date'>Aug 22 - Oct 22</h2>

						<ul>
							<li>Varius sed mi ac eu, purus tincidunt blandit at ipsum</li>
							<li>
								Blandit posuere mauris, consequat at tincidunt vel, faucibus
								cras. Lorem nunc amet, eu et scelerisque.
							</li>
						</ul>
					</div>
				</article>
			</article>
		</section>
	);
};

export default Journey;
