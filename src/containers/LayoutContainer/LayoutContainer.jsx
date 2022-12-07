import './LayoutContainer.scss';

import Home from '../../components/Home/Home';
import Skills from '../../components/Skills/Skills';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';

const LayoutContainer = () => {
	return (
		<>
			<Home />
			<Skills />
			<ProjectsContainer />
		</>
	);
};

export default LayoutContainer;
