import { useState } from 'react';

import { Link } from 'react-scroll';
import { Divide as Hamburger } from 'hamburger-react';

import logo from '../assets/images/logo.png';

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu(!menu);
	};

	const handleMenuClose = () => {
		setMenu(false);
	};

	return (
		<header className='fixed w-full top-0 z-50 bg-background text-black'>
			<div className='container mx-auto'>
				<nav className='flex flex-wrap items-center justify-between'>
					<Link to='home' className='p-0 m-0'>
						{/* <h1 className='h-full text-3xl bg-black py-2 px-4 text-white font-secondary underline uppercase'>
							Adam Sackfield
						</h1> */}
						<img src={logo} alt='' className='w-64' />
					</Link>

					{/* Mobile Hamburger Menu - START */}
					<div className='md:hidden'>
						<Hamburger
							rounded
							toggled={menu}
							color='#FF5678'
							toggle={toggleMenu}
						/>
					</div>
					{/* Mobile Hamburger Menu - END */}

					<div
						className={`w-full md:flex md:items-center md:w-auto ${
							menu ? '' : ' hidden'
						}`}
						id='menu'
					>
						<ul className='text-center md:flex'>
							<li>
								<Link
									to='home'
									className='p-4 block font-secondary uppercase text-2xl cursor-pointer tracking-wide transition ease-in-out duration-300 hover:text-blue'
									onClick={handleMenuClose}
									spy={true}
									smooth={true}
									offset={-70}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to='about'
									className='p-4 block font-secondary uppercase text-2xl cursor-pointer tracking-wide transition ease-in-out duration-300 hover:text-orange'
									onClick={handleMenuClose}
									spy={true}
									smooth={true}
									offset={-70}
								>
									About Me
								</Link>
							</li>
							<li>
								<Link
									to='work'
									className='p-4 block font-secondary uppercase text-2xl cursor-pointer tracking-wide transition ease-in-out duration-300 hover:text-green'
									onClick={handleMenuClose}
									spy={true}
									smooth={true}
									offset={-70}
								>
									Work
								</Link>
							</li>
							<li>
								<Link
									to='contact'
									className='p-4 block font-secondary uppercase text-2xl cursor-pointer tracking-wide transition ease-in-out duration-300 hover:text-pink'
									onClick={handleMenuClose}
									spy={true}
									smooth={true}
									offset={-70}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
