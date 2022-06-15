import React from 'react';

const sizeRef = {
	small: 'text-2xl px-2 py-0',
	medium: 'text-3xl px-4 py-1',
	large: 'text-4xl px-5 py-2',
	extraLarge: 'text-5xl px-6 py-2',
};

const Button = ({ name, color, size }) => {
	return (
		<button
			className={`${color} ${sizeRef[size]} font-secondary uppercase -rotate-3 border-4 rounded mr-6 drop-shadow-btn transition ease-in duration-200 hover:rotate-0 mb-4 `}
		>
			{name}
		</button>
	);
};

export default Button;
