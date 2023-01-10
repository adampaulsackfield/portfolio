import { useState } from 'react';
import './Navbar.scss';

import { Link } from 'react-scroll';

const Navbar = () => {
	const [menu, setMenu] = useState(true);

	const toggleMenu = () => {
		setMenu(!menu);
	};

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
				className='nav__link accent'
				spy={true}
				smooth={true}
				offset={-70}
			>
				Get in Touch
			</Link>

			<div
				className={`nav__menu ${menu ? 'show' : 'hide'}`}
				onClick={toggleMenu}
			>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
};

export default Navbar;
