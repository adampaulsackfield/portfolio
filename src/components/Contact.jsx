import React, { useState, useRef } from 'react';
import { FaEnvelope, FaGithub, FaSlack, FaDiscord } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

// TODO - Reset all form private data and implement .env

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
			toast.error(`A message is required to submit the form.`, {
				theme: 'dark',
			});
		} else {
			emailjs
				.sendForm(
					'service_e9d3c74',
					'template_22mt46j',
					form.current,
					'pDXVdlCWpDEfWjEwF'
				)
				.then((res) => {
					toast.success(
						`Your message has been sent. You should receive a response within 24 hours.`,
						{ theme: 'dark' }
					);
					setFormData(initialState);
				})
				.catch((err) => {
					toast.error(
						`Something went wrong. Please try and submit the form again. If you have no luck, you can email me direct at adam@adamsackfield.uk`,
						{ theme: 'dark' }
					);
				});
		}
	};

	const onChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className='px-2 min-h-screen bg-background text-primaryLight'>
			<section className='flex flex-col container mx-auto px-8 md:px-32 lg:flex-row lg:py-24'>
				<div className='lg:w-1/2 pr-12'>
					<h1 className='text-3xl text-accent font-serif text-center mt-6 mb-4 md:mt-2'>
						Contact Me
					</h1>
					<p className='text-xl text-center font-light mb-4'>
						If you're interested in working together, or just want to reach out
						for a chat, you can do so here.
					</p>

					<div className='hidden text-center lg:block'>
						<p className='pb-4'>
							<FaEnvelope className='inline pr-2 text-3xl' />
							<a href='mailto:adam@adamsackfield.uk'>Email Me</a>
						</p>

						<p className='pb-4'>
							<FaGithub className='inline pr-2 text-3xl' />
							<a
								href='https://github.com/adampaulsackfield'
								target='_blank'
								rel='noreferrer'
							>
								GitHub
							</a>
						</p>

						<p className='pb-4'>
							<FaSlack className='inline pr-2 text-3xl' />
							<a href='https://adam-vav4795.slack.com/archives/C03FDK5EWEA'>
								Slack
							</a>
						</p>
					</div>
				</div>

				<form ref={form} onSubmit={sendEmail} className='lg:w-1/2'>
					<div class='mb-6'>
						<label for='name' class='block mb-2 text-sm text-gray-600'>
							Full Name
						</label>
						<input
							type='text'
							name='name'
							onChange={(e) => onChangeHandler(e)}
							value={formData.name}
							placeholder='John Doe'
							required
							class='w-full px-3 py-2 placeholder-primaryLight border border-primaryLight rounded-md  focus:outline-none text-background'
						/>
					</div>

					<div class='mb-6'>
						<label for='email' class='block mb-2 text-sm text-gray-600'>
							Email Address
						</label>
						<input
							type='email'
							name='email'
							onChange={(e) => onChangeHandler(e)}
							value={formData.email}
							placeholder='you@email.com'
							required
							class='w-full px-3 py-2 placeholder-primaryLight border border-primaryLight rounded-md  focus:outline-none text-background'
						/>
					</div>

					<div class='mb-6'>
						<label for='message' class='block mb-2 text-sm text-gray-600'>
							Message
						</label>

						<textarea
							rows='7'
							name='message'
							onChange={(e) => onChangeHandler(e)}
							value={formData.message}
							placeholder='Your Message'
							class='w-full px-3 py-2 placeholder-primaryLight border border-primaryLight rounded-md  focus:outline-none text-background'
						></textarea>
					</div>

					<div class='mb-6'>
						<button
							type='submit'
							class='w-full px-2 py-4 text-white border border-accent rounded-lg focus:outline-none transition ease-in duration-200 hover:scale-105'
						>
							Send Message
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

export default Contact;
