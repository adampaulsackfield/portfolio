import './Journey.scss';
import { FaCaretUp } from 'react-icons/fa';

const Journey = ({ role: { header, date, bullets } }) => {
	return (
		<div className='experience__item'>
			<h1 className='experience__item-header'>
				{header}
				<FaCaretUp fill='#ff4aae' style={{ float: 'right' }} />
			</h1>

			<h2 className='experience__item-date'>{date}</h2>

			<ul>
				{bullets.map((bullet) => (
					<li>{bullet}</li>
				))}
			</ul>

			<hr />
		</div>
	);
};

export default Journey;
