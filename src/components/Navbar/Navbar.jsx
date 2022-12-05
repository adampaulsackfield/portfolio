import './Navbar.scss';

import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='nav'>
			<Link to='/' className='nav__logo'>
				AS
			</Link>

			<Link to='/' className='nav__link'>
				Home
			</Link>

			<Link to='/skills' className='nav__link'>
				Skills
			</Link>

			<Link to='/portfolio' className='nav__link'>
				Portfolio
			</Link>

			<Link to='/contact' className='nav__link'>
				Get in Touch
			</Link>

			<div className='nav__menu'>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
};

export default Navbar;
