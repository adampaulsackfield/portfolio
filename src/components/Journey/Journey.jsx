import { useState } from 'react';

import './Journey.scss';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

const Journey = ({ role: { header, date, bullets } }) => {
	const [show, setShow] = useState(true);

	return (
		<div className='experience__item'>
			<h1 className='experience__item-header'>
				{header}
				{show ? (
					<FaCaretUp
						fill='#ff4aae'
						style={{ float: 'right' }}
						onClick={() => setShow(!show)}
					/>
				) : (
					<FaCaretDown
						fill='#ff4aae'
						style={{ float: 'right' }}
						onClick={() => setShow(!show)}
					/>
				)}
			</h1>

			<h2 className='experience__item-date'>{date}</h2>

			<ul className={`${show ? 'show' : 'hide'}`}>
				{bullets.map((bullet) => (
					<li>{bullet}</li>
				))}
			</ul>

			<hr />
		</div>
	);
};

export default Journey;
