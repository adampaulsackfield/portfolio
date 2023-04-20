import './LayoutContainer.scss';

import Home from '../../components/Home/Home';
import Skills from '../../components/Skills/Skills';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import JourneysContainer from '../JourneysContainer/JourneysContainer';

const LayoutContainer = () => {
  return (
    <div className='container'>
      <Home />
      <Skills />
      <ProjectsContainer />
      <JourneysContainer />
      <Contact />
      <Footer />
    </div>
  );
};

export default LayoutContainer;
