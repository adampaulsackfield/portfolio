import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

describe('<Navbar /> Tests', () => {
	it('should render all links', () => {
		render(<Navbar />);

		const headerText = screen.getByText(/AS/i);
		const links = ['AS', 'Home', 'Skills', 'Portfolio', 'Get in Touch'];

		const actualLinks = screen.getAllByRole('link');

		expect(headerText).toBeInTheDocument();

		links.forEach((link, i) => {
			expect(actualLinks[i].textContent).toEqual(link);
		});
	});
});
