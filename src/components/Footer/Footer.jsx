import './Footer.scss';

const Footer = () => {
	const date = new Date();

	return (
		<footer className='footer-background'>
			<div className='container footer'>
				<p className='footer__copyright'>
					{date.getFullYear()} | All Rights Reserved
				</p>
				<h1 className='footer__header'>AS</h1>
			</div>
		</footer>
	);
};

export default Footer;
