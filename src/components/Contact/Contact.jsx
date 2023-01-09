import './Contact.scss';

const Contact = () => {
	return (
		<article id='contact' className='contact'>
			<h1 className='contact__header'>
				LET'S <span className='contact__header--accent'>WORK TOGETHER</span>
			</h1>

			<p className='contact__text'>
				Ut fermentum vitae ut volutpat arcu, consectetur turpis etiam. Etiam
				felis id nibh sed convallis et laoreet in. Bibendum pharetra ipsum,
				mauris at eu, fusce imperdiet eget velit.
			</p>

			<button className='contact__button'>
				GET IN TOUCH <i className='fa-regular fa-paper-plane'></i>
			</button>
		</article>
	);
};

export default Contact;
