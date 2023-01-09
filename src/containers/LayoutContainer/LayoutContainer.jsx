import './LayoutContainer.scss';

import Home from '../../components/Home/Home';
import Skills from '../../components/Skills/Skills';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import Journey from '../../components/Journey/Journey';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const LayoutContainer = () => {
	return (
		<>
			<Home />
			<Skills />
			<ProjectsContainer />
			<Journey />
			<Contact />
			<Footer />
		</>
	);
};

export default LayoutContainer;
