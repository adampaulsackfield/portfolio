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
					As a technical specialist at Apple, I have developed strong
					problem-solving and time management skills, as well as the ability to
					work effectively with ambiguity. In addition to my experience at
					Apple, I have also completed two boot-camps - one in software
					engineering and another in cloud engineering - which have provided me
					with a strong foundation in these areas.
				</p>
				<p>
					I am confident in my ability to work with people, having given
					one-to-many presentations and contributed to team projects. Overall,
					my diverse skill set and experience make me a valuable asset in any
					technical role.
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
