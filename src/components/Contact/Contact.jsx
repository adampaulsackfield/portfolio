import React, { useState, useRef } from 'react';
import { FaEnvelope, FaGithub, FaSlack } from 'react-icons/fa';
import emailjs from 'emailjs-com';

import Button from '../Utils/Button';

const initialState = {
	name: '',
	email: '',
	message: '',
};

const Contact = () => {
	const [formData, setFormData] = useState(initialState);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			console.log('Error');
		} else {
			emailjs
				.sendForm(
					process.env.REACT_APP_EMAIL_SERVICE,
					process.env.REACT_APP_EMAIL_TEMPLATE,
					form.current,
					process.env.REACT_APP_EMAIL_P
				)
				.then(() => {
					console.log(
						'Your message has been sent. You should receive a response within 24 hours.'
					);

					setFormData(initialState);
				})
				.catch((err) => {
					console.error(
						`Something went wrong. Please try and submit the form again. If you have no luck, you can email me direct at adam@adamsackfield.uk`
					);
				});
		}
	};

	const onChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<section id='contact' className='min-h-screen bg-background text-black'>
			<div className='container mx-auto flex flex-col pt-20'>
				<h1 className='text-6xl text-pink font-secondary text-center tracking-wider underline underline-offset-6'>
					Contact
				</h1>
				<p className='text-xl text-center tracking-wider my-6 px-4 md:px-20'>
					If you're interested in working together, or just want to reach out
					for a chat, you can do so here.
				</p>

				<div className='hidden text-center lg:block'>
					<p className='pb-4 text-orange'>
						<a href='mailto:adam@adamsackfield.uk'>
							<FaEnvelope className='inline pr-2 text-3xl' />
							Email Me
						</a>
					</p>

					<p className='pb-4 text-blue'>
						<a
							href='https://github.com/adampaulsackfield'
							target='_blank'
							rel='noreferrer'
						>
							<FaGithub className='inline pr-2 text-3xl' />
							GitHub
						</a>
					</p>

					<p className='pb-4 text-purple'>
						<a href='https://adam-vav4795.slack.com/archives/C03FDK5EWEA'>
							<FaSlack className='inline pr-2 text-3xl' />
							Slack
						</a>
					</p>
				</div>
			</div>

			<form ref={form} onSubmit={sendEmail} className='p-2 lg:w-1/2 mx-auto'>
				<h1 className='text-5xl text-black font-bold -rotate-1 font-secondary uppercase tracking-wider text-center pb-4'>
					Message Me
				</h1>

				<input
					type='text'
					placeholder='Name...'
					className='w-full py-2 px-2 my-2 rounded-md outline-none border-4 border-black -rotate-1 drop-shadow-btn transition ease-in duration-200 focus:border-pink'
					name='name'
					onChange={(e) => onChangeHandler(e)}
					value={formData.name}
					required
				/>

				<input
					type='email'
					placeholder='Email...'
					className='w-full py-2 px-2 my-2 rounded-md outline-none border-4 border-black -rotate-1 drop-shadow-btn transition ease-in duration-200 focus:border-pink'
					name='email'
					onChange={(e) => onChangeHandler(e)}
					value={formData.email}
					required
				/>

				<textarea
					type='text'
					placeholder='Message...'
					rows={10}
					className='w-full py-2 px-2 my-2 rounded-md outline-none border-4 border-black -rotate-1 drop-shadow-btn transition ease-in duration-200 focus:border-pink mb-6'
					name='message'
					onChange={(e) => onChangeHandler(e)}
					value={formData.message}
					required
				/>

				<div className='flex justify-around'>
					<button type='submit'>
						<Button name='Send Message' color='bg-orange' size='medium' />
					</button>
					<button onClick={() => setFormData(initialState)}>
						<Button name='Clear' color='bg-green' size='medium' />
					</button>
				</div>
			</form>
		</section>
	);
};

export default Contact;
