import Header from '../../components/header/Header';
import './Projects.scss';

function Projects() {
  document.title = 'Projects - Hugo Brothier';

  return (
    <div>
      <Header />

      <div className="content">
        <h3>PROJECTS</h3>
      </div>
    </div>
  );
}

export default Projects;
