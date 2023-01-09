import { useState } from 'react';

import { journeys } from '../../assets/journeys';

import profileImage from '../../assets/images/profile.jpeg';
import './JourneysContainer.scss';
import Journey from '../../components/Journey/Journey';

const JourneysContainer = () => {
	const [roles, setRoles] = useState(journeys);

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
				<h2 class='accent'>Experience</h2>

				<article class='experience'>
					{roles && roles.map((role) => <Journey role={role} />)}
				</article>
			</article>
		</section>
	);
};

export default JourneysContainer;
