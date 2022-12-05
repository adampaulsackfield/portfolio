import './Navbar.scss';

import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<nav className='nav'>
			<Link to='/' className='nav__logo' spy={true} smooth={true} offset={-70}>
				AS
			</Link>

			<Link
				to='home'
				className='nav__link'
				spy={true}
				smooth={true}
				offset={-70}
			>
				Home
			</Link>

			<Link
				to='skills'
				className='nav__link'
				spy={true}
				smooth={true}
				offset={-70}
			>
				Skills
			</Link>

			<Link
				to='portfolio'
				className='nav__link'
				spy={true}
				smooth={true}
				offset={-70}
			>
				Portfolio
			</Link>

			<Link
				to='contact'
				className='nav__link'
				spy={true}
				smooth={true}
				offset={-70}
			>
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
