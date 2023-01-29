import { useState } from 'react';
import './Navbar.scss';
import { ImCross } from 'react-icons/im';

import { Link } from 'react-scroll';
import { useEffect } from 'react';

const Navbar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [menu, showMenu] = useState(false);

	const toggleMenu = () => {
		showMenu(!menu);
	};

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
			if (windowWidth > 768) {
				showMenu(false);
			}
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	});

	return (
		<nav className={`${menu ? 'nav nav-show' : 'nav'}`}>
			<Link
				to='/'
				className='nav__logo'
				spy={true}
				smooth={true}
				offset={-70}
				role='link'
			>
				AS
			</Link>

			<Link
				to='home'
				className={`${menu ? 'nav__link-show' : 'nav__link'}`}
				spy={true}
				smooth={true}
				offset={-70}
				onClick={() => showMenu(false)}
				role='link'
			>
				Home
			</Link>

			<Link
				to='skills'
				className={`${menu ? 'nav__link-show' : 'nav__link'}`}
				spy={true}
				smooth={true}
				offset={-70}
				onClick={() => showMenu(false)}
				role='link'
			>
				Skills
			</Link>

			<Link
				to='portfolio'
				className={`${menu ? 'nav__link-show' : 'nav__link'}`}
				spy={true}
				smooth={true}
				offset={-70}
				onClick={() => showMenu(false)}
				role='link'
			>
				Portfolio
			</Link>

			<Link
				to='contact'
				className={`${menu ? 'nav__link-show' : 'nav__link accent'}`}
				spy={true}
				smooth={true}
				offset={-70}
				onClick={() => showMenu(false)}
				role='link'
			>
				Get in Touch
			</Link>

			<div
				className={`${menu ? 'nav__menu-hide' : 'nav__menu'}`}
				onClick={() => toggleMenu()}
			>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<ImCross
				className={`${menu ? 'nav__cross' : 'nav__cross-hide'}`}
				onClick={() => toggleMenu()}
				fill='#ff4aae'
			/>
		</nav>
	);
};

export default Navbar;
