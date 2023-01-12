import { useState } from 'react';
import './Navbar.scss';
import { ImCross } from 'react-icons/im';

import { Link } from 'react-scroll';

const Navbar = () => {
	const [menu, showMenu] = useState(false);

	const toggleMenu = () => {
		showMenu(!menu);
	};

	return (
		<nav className={`${menu ? 'nav nav-show' : 'nav'}`}>
			<Link to='/' className='nav__logo' spy={true} smooth={true} offset={-70}>
				AS
			</Link>

			<Link
				to='home'
				className={`${menu ? 'nav__link-show' : 'nav__link'}`}
				spy={true}
				smooth={true}
				offset={-70}
				onClick={() => toggleMenu()}
				onTouchStart={() => toggleMenu()}
			>
				Home
			</Link>

			<Link
				to='skills'
				className={`${menu ? 'nav__link-show' : 'nav__link'}`}
				spy={true}
				smooth={true}
				offset={-70}
				onClick={() => toggleMenu()}
				onTouchStart={() => toggleMenu()}
			>
				Skills
			</Link>

			<Link
				to='portfolio'
				className={`${menu ? 'nav__link-show' : 'nav__link'}`}
				spy={true}
				smooth={true}
				offset={-70}
				onClick={() => toggleMenu()}
				onTouchStart={() => toggleMenu()}
			>
				Portfolio
			</Link>

			<Link
				to='contact'
				className={`${menu ? 'nav__link-show' : 'nav__link accent'}`}
				spy={true}
				smooth={true}
				offset={-70}
				onClick={() => toggleMenu()}
				onTouchStart={() => toggleMenu()}
			>
				Get in Touch
			</Link>

			<div
				className={`${menu ? 'nav__menu-hide' : 'nav__menu'}`}
				onClick={() => toggleMenu()}
				onTouchStart={() => toggleMenu()}
			>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<ImCross
				className={`${menu ? 'nav__cross' : 'nav__cross-hide'}`}
				onClick={() => toggleMenu()}
				onTouchStart={() => toggleMenu()}
				fill='#ff4aae'
			/>
		</nav>
	);
};

export default Navbar;
