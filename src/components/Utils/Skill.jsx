import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiTypescript } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';

const iconRef = {
	html5: <AiFillHtml5 className='text-3xl' />,
	css3: <FaCss3 className='text-3xl' />,
	javascript: <SiJavascript className='text-3xl' />,
	nodejs: <FaNodeJs className='text-3xl' />,
	react: <FaReact className='text-3xl' />,
	mongo: <DiMongodb className='text-3xl' />,
	sql: <SiPostgresql className='text-3xl' />,
	typescript: <SiTypescript className='text-3xl' />,
};

const Skill = ({ name, color }) => {
	return (
		<div
			className={`${color} font-secondary uppercase border-4 rounded mr-2 drop-shadow-btn flex flex-col justify-center items-center p-4`}
		>
			{iconRef[name]}
			<p className='text-lg tracking-wider mt-2'>{name}</p>
		</div>
	);
};

export default Skill;
