import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

import Logo from '../assets/logo.png';

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu(!menu);
	};

	const handleMenuHide = () => {
		setMenu(false);
	};

	return (
		<header className='pt-4'>
			<div className='container mx-auto'>
				<div className='p-4 flex flex-wrap items-center justify-between md:flex-col lg:flex-row'>
					<Link
						to='/'
						className='flex md:flex-col md:items-center lg:flex-row'
						onClick={handleMenuHide}
					>
						<img
							src={Logo}
							alt='Person on a laptop'
							className='w-12 mr-2 md:mr-0 md:w-24 md:mb-4 lg:mr-4'
						/>
						<div className='flex flex-col items-center'>
							<span className='font-serif text-primary text-lg tracking-wider transition ease-in-out duration-300 hover:text-accent md:hidden lg:block lg:text-3xl'>
								Adam
							</span>
							<span className='font-serif text-primaryDark text-lg tracking-wider transition ease-in-out duration-300 hover:text-accent md:hidden lg:block lg:text-3xl'>
								Sackfield
							</span>
						</div>
					</Link>

					{/* Mobile Hamburger Menu - START */}
					<div className='md:hidden'>
						<Hamburger
							rounded
							toggled={menu}
							color='#f57dff'
							toggle={toggleMenu}
						/>
					</div>
					{/* Mobile Hamburger Menu - END */}

					<nav
						className={`w-full md:flex md:items-center md:w-auto ${
							menu ? '' : ' hidden'
						}`}
						id='menu'
					>
						<ul className='md:flex md:justify-between text-primaryLight'>
							<li>
								<NavLink
									className='p-4 text-center block font-serif tracking-wide transition ease-in-out duration-300 hover:text-accent md:text-2xl'
									onClick={handleMenuHide}
									to='/'
								>
									Home
								</NavLink>
							</li>

							<li>
								<NavLink
									className='p-4 text-center block font-serif tracking-wide transition ease-in-out duration-300 hover:text-accent md:text-2xl'
									onClick={handleMenuHide}
									to='/about'
								>
									About
								</NavLink>
							</li>

							<li>
								<NavLink
									className='p-4 text-center block font-serif tracking-wide transition ease-in-out duration-300 hover:text-accent md:text-2xl'
									onClick={handleMenuHide}
									to='/work'
								>
									Work
								</NavLink>
							</li>

							<li>
								<NavLink
									className='p-4 text-center block font-serif tracking-wide transition ease-in-out duration-300 hover:text-accent md:text-2xl'
									onClick={handleMenuHide}
									to='/contact'
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
