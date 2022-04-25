import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'dg8iuo4u',
	dataset: 'production',
	useCdn: true,
});
