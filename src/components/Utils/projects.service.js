import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebase from '../../firebase';

const db = getFirestore(firebase);

export const addProject = async () => {
	try {
		const docRef = await addDoc(collection(db, 'projects'), {
			title: 'NC News',
			description:
				"NC News is a Full-Stack Application built using Node, Express, React and SQl. It has full CRUD functionality and mocks a logged in user. This app utilizes a variety of technologies, best practices and packages. React's Context API is used for managing the User State, this decision was made purely to get experience with Context API as it is overkill for it's current use. The rest of the applications state is managed through props.",
			liveUrl: 'https://neon-froyo-ab23ec.netlify.app',
			gitUrl: 'https://github.com/adampaulsackfield/NC-news-fe',
			tag: 'Full-Stack',
			technologies: ['NodeJS', 'Express', 'Jest', 'SQL', 'React', 'Axios'],
		});
		return console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		return console.error('Error adding document: ', e);
	}
};
