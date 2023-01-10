import './Contact.scss';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
	return (
		<article id='contact' className='contact'>
			<h1 className='contact__header'>
				LET'S <span className='contact__header--accent'>WORK TOGETHER</span>
			</h1>

			<p className='contact__text'>
				If you would like to work together, or just reach out for a chat then
				click below.
			</p>

			<button className='contact__button'>
				<a href='mailto:adam@adamsackfield.uk'>
					GET IN TOUCH <FaPaperPlane fill='#ff4aae' />
				</a>
			</button>
		</article>
	);
};

export default Contact;
